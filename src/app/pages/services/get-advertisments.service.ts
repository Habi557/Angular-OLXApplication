import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAdvertismentsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9000/olx/advertisement/user/advertise"
  getAdvertisements(){
    let headers= new HttpHeaders();
   headers= headers.set("Authorization","Bearer " + localStorage.getItem("token"));
    return this.http.get(this.url,{headers:headers}).pipe(catchError((error:HttpErrorResponse)=>throwError(error)));
  }
  
}
