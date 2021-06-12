import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingControlsComponent } from './setting-controls/setting-controls.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [SettingControlsComponent],
  imports: [
    CommonModule,
    TimepickerModule.forRoot(),
    FormsModule,
    MatGridListModule,
    MatTooltipModule,
    MatSlideToggleModule,
    DropdownModule
  ],
  exports: [
    SettingControlsComponent
  ]
})
export class SettingsModule { }
