import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8082/olx/user/"
  public login(data: { userName: string; password: string; }){
    return this.http.post(environment.apiUrl+"user/authenticate", data)
  // return this.http.get("http://localhost:9191/test")
    .pipe(
      catchError((err: HttpErrorResponse) => { return throwError(err)} )
    )
  }
  checkUserName(email:string) {
   return this.http.get(environment.apiUrl+'user/forgetpassword/'+email).pipe(
    catchError((err: HttpErrorResponse) => throwError(err))
   )
  }

  validateOtp(email: string, otp: any) {
 return this.http.get(environment.apiUrl+'user/verifyotp/'+otp+'/'+email).pipe(
  catchError((err: HttpErrorResponse)=> throwError(err))
 )
  }
  googleLogin() {
    return this.http.get("http://localhost:8082/oauth2/authorization/google");
  }
}
