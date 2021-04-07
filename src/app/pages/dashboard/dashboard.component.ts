import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('solid', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('regular', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('light', { packClass: 'fal', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('duotone', { packClass: 'fad', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('brands', { packClass: 'fab', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('regular');

  }
}
