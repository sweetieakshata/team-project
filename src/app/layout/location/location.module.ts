import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationComponent } from './location.component';
import { LocationRouting } from './location.routing';
import { ConfirmDialogModule } from 'primeng/primeng';

// import { UserRouting } from './user.routing';
// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';
// import { GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
         LocationRouting,

        // DesignationRouting,
        ConfirmDialogModule,
        // GrowlModule

    ],
    declarations: [
       LocationComponent
    ],
    providers: []
})
export class LocationModule {}
