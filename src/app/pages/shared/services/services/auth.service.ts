import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole, UpdateUserModel, AuthToken } from 'app/backend/models';
import { AuthenticationService } from 'app/backend/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //#region Fields
  private _allowedSubscriptionStatus = ['active', 'past_due', 'unpaid', 'incomplete', 'trialing'];

  private _token: string;
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  //#endregion

  //#region Properties
  get user() { return this._user.value; }
  get role() { return this.user?.role; }
  get isRootUser() { return this.role === 'Root'; }
  get isAdminUser() { return this.role === 'Admin'; }
  get userSubject() { return this._user; }
  get subscriptionStatus() { return this.user?.subscription?.status; }
  get subscriptionAllowed() {
    const bypass = this.isRootUser || this.isAdminUser;
    const activeSubscription = this.subscriptionStatus && this._allowedSubscriptionStatus.includes(this.subscriptionStatus);
    const verified = this.user?.isVerified ?? false;
    return bypass || (verified && activeSubscription);
  }

  get refreshToken(): string {
    return this.user?.authentication?.refreshToken;
  }

  get token() { return this._token; }
  set token(newToken: string) {
    this._token = newToken;
  }
  //#endregion

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private storage: LocalStorageService,
  ) {

    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key !== 'user') return;

      if (!event.oldValue || !event.newValue)
        location.reload();

    });

    try {

      const storedUser = storage.getObject('user') as User;
      if (storedUser) {
        this._user.next(storedUser);
        this._token = storedUser.authentication.accessToken;
      }

    } catch (_) {
      this._user.next(null);
      this._token = null;
    }
  }

  //#region Functions

  login(handle: string, password: string) {
    return this.authenticationService.login({
      body: {
        handle, password,
        roles: [UserRole.Root, UserRole.Account, UserRole.Admin]
      }
    }).pipe(map(user => {
      this.assignUser(user);
      return user;
    }));
  }

  assignUser(user: User, copyToken?: boolean) {
    if (copyToken && this.user)
      user.authentication = this.user.authentication;

    this.storage.setObject('user', user);
    this._user.next(user);

    this._token = user.authentication.accessToken;
  }
  updateUserInfo(user: UpdateUserModel) {
    const newUser: User = { ...this.user, ...user };
    this.assignUser(newUser);
  }
  logout(server: boolean = true) {

    if (!server)
      this.localLogout();
    else
      this.authenticationService.logout({ body: { refreshToken: this.refreshToken } }).subscribe(
        _ => this.localLogout(),
        _ => this.localLogout()
      );
  }

  userRefreshToken(): Observable<AuthToken> {
    return this.authenticationService.refreshToken({ refreshToken: this.user?.authentication?.refreshToken })
      .pipe(
        map(authToken => {

          this.user.authentication = authToken;
          this.assignUser(this.user);

          return authToken;
        })
      );
  }

  //#endregion

  //#region Private Methods
  private localLogout() {
    this._user.next(null);
    this._token = null;
    this.storage.removeKey('user');
    this.router.navigateByUrl('/login');
  }
  //#endregion
}
