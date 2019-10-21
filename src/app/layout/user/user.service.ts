import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { AppConstant } from 'src/app/app.constant';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    api_url: string;
    appendpoint: string;
    cpDefaultUrl: string;
    page1:number;
    Searchstring:string;

    SERVER_URL_USER: string;
    SERVER_URL_SEARCH:string;

  constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) {
  this.api_url = AppConstant.API_ENDPOINT1;
  this.appendpoint = this.api_url;
  this.SERVER_URL_USER= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETUSER;
  this.SERVER_URL_SEARCH= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETUSERSEARCH;
}

public getUsers(Page:any) :Observable<any>{
    this.page1=Page;

   var req={
     Page:this.page1,
    //  searchstring:this.Searchstring
       }
    var querystring = "" + $.param(req) ;
    return this.http.get(this.SERVER_URL_USER+querystring);
    }
    public getsearch(item:any){

        return this.http.get(this.SERVER_URL_SEARCH+ item);
    }


}
