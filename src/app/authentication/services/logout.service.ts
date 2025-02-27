import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApplicationUrls } from 'src/app/enviro/stage';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  public logout(token : string){
   let headers= new HttpHeaders({'Authorization': "Bearer " + token});
   // let headers= new HttpHeaders();

    headers=headers.set("Authorization","Bearer " + token);
   console.log("logoutservice")
    return this.http.delete(ApplicationUrls.apilogin+"logout",{headers:headers} ).pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }

}


