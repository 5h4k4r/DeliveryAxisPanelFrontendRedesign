import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { DashboardData } from 'app/backend/models';
import { DashboardService } from 'app/backend/services';
import { AlertService } from '../shared/services/services/alert.service';
import { AuthService } from '../shared/services/services/auth.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  //#region Fields
  private _data: DashboardData;
  private _loading = false;
  private _hasError = false;
  //#endregion

  //#region Properties
  get role(): string { return this.authService.user.role; }
  get dashboardTitle() { return this.alertService.dashboardTitle; }
  get data() { return this._data; }
  get loading() { return this._loading; }
  get hasError() { return this._hasError; }
  //#endregion

  //#region Constructor
  constructor(
    private alertService: AlertService,
    private dashboardService: DashboardService,
    private authService: AuthService,
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack('solid', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('regular', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('light', { packClass: 'fal', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('duotone', { packClass: 'fad', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('brands', { packClass: 'fab', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('regular');
  }
  //#endregion

  //#region Functions
  ngOnInit(): void {
    this.getDataAsync();
    this.dashboardTitle.next('Dashboard');
  }
  //#endregion
  //#region Private Functions
  async getDataAsync() {
    try {
      this._loading = true;
      this._hasError = false;
      this._data = await this.dashboardService.getDashboardData().toPromise();

    } catch (error) {
      this._hasError = true;
    }
    this._loading = false;
  }
  //#endregion
}