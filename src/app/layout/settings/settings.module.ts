import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
    imports: [
        CommonModule,

        SettingsRoutingModule,
        PageHeaderModule

    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule {}
