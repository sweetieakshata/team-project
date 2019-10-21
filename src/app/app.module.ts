import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { CommonHttpService } from './shared/common-http.service';
import { LocalStorageService } from './shared/local-storage.service';
import { JWTTokenInterceptorService } from './shared/jwttoken-interceptor.service';
import { MasterService } from './services/master.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CookieService } from './services/cookie.service';
import { CommonUtilityService } from './services/common-utility.service';
import { CommonAppService } from './services/appservices/common-app.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
//Module
import { GrowlModule } from 'primeng/growl';
import { Interceptors } from './interceptors';
// import {GrdFilterPipe} from './services/search-filter.pipe';



// import { DesignationComponent } from './layout/settings/designation/designation.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        GrowlModule,
        ConfirmDialogModule

    ],
    declarations: [AppComponent],
    providers: [
        DatePipe,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JWTTokenInterceptorService,
            multi: true,
        },
        {provide:HTTP_INTERCEPTORS,useClass:Interceptors,multi:true},
        AuthGuard, CommonHttpService, LocalStorageService, MasterService, MessageService, CookieService
        , CommonAppService, CommonUtilityService,ConfirmationService],

    bootstrap: [AppComponent]
})
export class AppModule { }
