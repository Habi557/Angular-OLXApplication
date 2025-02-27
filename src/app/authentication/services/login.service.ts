import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8082/olx/user/"
  public login(data: { userName: string; password: string; }){
    return this.http.post(this.url+"authenticate", data
    ).pipe(
      catchError((err: HttpErrorResponse) => { return throwError(err)} )
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
  googleLogin() {
    return this.http.get("http://localhost:8082/oauth2/authorization/google");
  }
}
