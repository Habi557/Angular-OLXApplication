import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ApplicationUrls } from '../enviro/stage';
import { Advertisment } from '../models/advertisment';



@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  
//storage: Storage = inject(Storage);
 //storage = getStorage();
//  firestore = getFirestore();
// storageRef: StorageReference
  constructor(private http: HttpClient) { }
  postAdd(selectedFile: File, advertisement: Advertisment) {
     const uploadData = new FormData();
uploadData.append('postAdvertisment', new Blob([JSON.stringify(advertisement)],{type: 'application/json'}));
    uploadData.append('image', selectedFile,selectedFile.name);
   // uploadData.append('postAdvertisment',JSON.stringify(advertisement));

    console.log(advertisement)
    // formData.append('title', advertisement.title.toString());
    // formData.append('price', advertisement.price.toString());
    // formData.append('category', advertisement.category.toString());
    // formData.append('description', advertisement.description.toString());
    // formData.append('userName', advertisement.userName.toString());
    // formData.append('createDate', advertisement.createDate.toString());
    // formData.append('status', advertisement.status.toString());
    // formData.append('modified_Date', advertisement.modified_Date ? advertisement.modified_Date.toString() : '');
    // formData.append('postedBy', advertisement.postedBy.toString());
    const headers = new HttpHeaders({
      Authorization: `${localStorage.getItem("token")}`
    });
    return this.http.post(ApplicationUrls.apiUrl+'postadvertise',uploadData,{headers});
  }
  
  getAdvertismentById(){
    
  }
 
    

  


}


