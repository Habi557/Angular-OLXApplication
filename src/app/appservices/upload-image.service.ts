import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ApplicationUrls } from '../enviro/stage';
import { Advertisment } from '../models/advertisment';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  //storage: Storage = inject(Storage);
  //storage = getStorage();
  //  firestore = getFirestore();
  // storageRef: StorageReference
  constructor(private http: HttpClient) { }
  postAdd(selectedFile: File[], advertisement: Advertisment) {
    const uploadData = new FormData();
    uploadData.append('postAdvertisment', new Blob([JSON.stringify(advertisement)], { type: 'application/json' }));
    // uploadData.append('image', selectedFile,selectedFile.name);
    selectedFile.forEach((file) => {
      uploadData.append('image', file)
    })

    console.log(advertisement)

    const headers = new HttpHeaders({
      Authorization: `${localStorage.getItem("token")}`
    });
    // let headers= new HttpHeaders();
    // headers=headers.set("Authorization","Bearer " + `${localStorage.getItem("token")}`);
    return this.http.post(environment.apiUrl + 'advertisement/postadvertise', uploadData, { headers });
  
  //
  }
  getAllCategorys() {
    return this.http.get(ApplicationUrls.olxMasterData+'category');
 }






}


