import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  //#region Fields
  dashboardTitle: BehaviorSubject<string> = new BehaviorSubject<string>('Dashboard');
  //#endregion

  //#region Constructor
  constructor(
    private toastrService: NbToastrService
  ) { }
  //#endregion

  //#region Functions

  success(options) {
    return this.toastrService.show({ ...options, ...{ type: 'success' } });
  }

  info(options) {
    return this.toastrService.show({ ...options, ...{ type: 'success' } });

  }

  warning(options) {
    return this.toastrService.show({ ...options, ...{ type: 'success' } });

  }

  error(options) {
    return this.toastrService.show({ ...options, ...{ type: 'success' } });
  }
  // openDialog(options: { title?: string; content?: string; button?: string }) {
  //   return this.dialog.open(DialogComponent, {
  //     width: '500px',
  //     data: options
  //   });
  // }
  //#endregion
}
