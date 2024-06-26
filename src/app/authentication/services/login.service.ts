import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8000/olx/user/"
  public login(data: { userName: string; password: string; }): Observable<HttpResponse<string>> {
    return this.http.post(this.url+"authenticate", data, {
      responseType: 'text',
      observe: 'response'

    },
    ).pipe(
      catchError((err: HttpErrorResponse) => throwError(err))
    )
  }
  checkUserName(email:string) {
   return this.http.get(this.url+'forgetpassword/'+email).pipe(
    catchError((err: HttpErrorResponse) => throwError(err))
   )
  }

  validateOtp(email: string, otp: any) {
 return this.http.get(this.url+'verifyotp/'+otp+'/'+email).pipe(
  catchError((err: HttpErrorResponse)=> throwError(err))
 )
  }
}
