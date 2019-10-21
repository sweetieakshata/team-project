import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        // BrowserModule,
        FormsModule,
        NgxPaginationModule,

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent ]
})
export class LayoutModule {}
