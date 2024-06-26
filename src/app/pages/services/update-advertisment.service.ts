import { Injectable } from '@angular/core';
import { Advertise } from '../models/Advertise';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateAdvertismentService {

  constructor(private http :HttpClient) { }
  editAdvertisement: Advertise;

  url='http://localhost:9000/olx/advertisement/advertise/';
  update(data:any){
    console.log("update "+ JSON.stringify(data));
    let headers = new HttpHeaders();
    this.editAdvertisement.title=data.editValue.title;
    this.editAdvertisement.price=data.editValue.price;
    this.editAdvertisement.description=data.editValue.description;
    this.editAdvertisement.category=data.editValue.category;
    headers=headers.set("Authorization","Bearer " + localStorage.getItem("token"))
    return this.http.put(this.url+''+data.editValue.id,this.editAdvertisement,{headers:headers}).pipe(catchError((error:HttpErrorResponse)=>throwError(error)));
  }
}
