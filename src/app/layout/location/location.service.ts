import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from 'src/app/app.constant';
import { Observable } from 'rxjs';
import { CommonHttpService } from 'src/app/shared/common-http.service';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
    api_url: string;
    appendpoint: string;
    cpDefaultUrl: string;
    cpDefaultUpdateUrl: string;
    SERVER_URL_LOC: string;
    SERVER_URL_LOC_DEL: string;

  constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) {
    this.api_url = AppConstant.API_ENDPOINT1;
    this.appendpoint = this.api_url;
    this.SERVER_URL_LOC= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.GETLOCATION;
    this.SERVER_URL_LOC_DEL= this.appendpoint+ AppConstant.API_CONFIG.API_URL.SETTINGS.DELETELOCATION;
  }

  public getLocations() :Observable<any>{
    return this.http.get(this.SERVER_URL_LOC);
    }

    public deleteLocations(locationID) {
        let head = new HttpHeaders().set("Content-Type", "application/json");
        console.log('how it is getting ID?:' + locationID);
        return this.http.post(this. SERVER_URL_LOC_DEL+locationID, { headers: head });
        }

}
