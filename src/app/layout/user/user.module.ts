import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user.component';
import { UserRouting } from './user.routing';
import {NgxPaginationModule} from 'ngx-pagination';

// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';
// import { GrowlModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {GrdFilterPipe} from '../../../app/services/search-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
         UserRouting,
         NgxPaginationModule,
        // DesignationRouting,
        // ConfirmDialogModule,
        // GrowlModule
        TableModule
    ],
    declarations: [
       UserComponent,
       GrdFilterPipe
    ],
    providers: []
})
export class UserModule {}
