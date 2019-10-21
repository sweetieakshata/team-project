import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationComponent } from './designation.component';
import { DesignationRouting } from './designation-routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { GrowlModule } from 'primeng/primeng';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
        DesignationRouting,
        ConfirmDialogModule,
        GrowlModule,
        NgxPaginationModule

    ],
    declarations: [
        DesignationComponent
    ],
    providers: [ConfirmationService]
})
export class DesignationModule {}
