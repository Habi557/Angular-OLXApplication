import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:8000/olx/user/logout"
  public logout(token : string) : Observable<HttpResponse<string>>{
   // let headers= new HttpHeaders({'Authorization': "Bearer " + token});
    let headers= new HttpHeaders();

    headers=headers.set("Authorization","Bearer " + token);
   console.log("logoutservice")
    return this.http.delete(this.url,{headers:headers,responseType: 'text',
    observe: 'response'} ).pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }

}


