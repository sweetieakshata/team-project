import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
@Injectable()
export class CommonHttpService {
  constructor(private http: HttpClient, private AngHttp: Http) { }
//   SERVER_URL_Mem: string='https://da84a803.ngrok.io/api/Member/GetMemberById/?MemberId=1';


//   public getMember() {
//     return this.http.get(this.SERVER_URL_Mem);
//     }





  public globalPostService(url: string, data: any) {
    return this.http.post(url, data).toPromise();

  }

  public globalGetService(url: string, data: any) {
    var querystring = "?" + $.param(data);
    return this.http.get(url + querystring).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }

  public globalGetServiceByUrl(url: string, data: any) {
    return this.http.get(url + data).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }
  public globalPostStreamService(url: string, data: any, header) {
    return this.http.post(url, data, header).toPromise().catch(e => {
      //console.log("error happend", e);
      if (e.status == 401) {
        //console.log(e.statusText);
        // window.location.href = "../../access.html";
      }
    });

  }
  downloadfile(url, data) {
    var postData = new FormData();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Control-Allow-Credentials', 'true');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    //xhr.responseType = 'blob';
    xhr.onreadystatechange = function (e) {
      console.log(e);
    };
    xhr.onload = function (e) {
      var blob = xhr.response;
      this.saveOrOpenBlob(blob);
    }.bind(this)
    xhr.send(postData);
  }
  saveOrOpenBlob(blob) {
    console.log("blob", blob);
  }
  HttpBlobPostService(url: string, data: any) {
    return this.AngHttp.post(url, data, { responseType: ResponseContentType.Blob })
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
  }
  private extractData(res: Response) {
    // let body = res.json();
    return res || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
  public async downloadResource(url: string): Promise<Blob> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Methods", "GET, POST");
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Blob>(url,
      { headers: headers, responseType: 'blob' as 'json' }).toPromise();
    //return file;
  }
}
