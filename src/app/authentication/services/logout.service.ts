import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApplicationUrls } from 'src/app/enviro/stage';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  public logout(token : string){
   let headers= new HttpHeaders({'Authorization': "Bearer " + token});
    headers=headers.set("Authorization","Bearer " + token);
   console.log("logoutservice")
    return this.http.delete(environment.apiUrl+"user/logout",{headers:headers} ).pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }

}


