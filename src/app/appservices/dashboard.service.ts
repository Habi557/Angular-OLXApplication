import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApplicationUrls } from '../enviro/stage';
import { BehaviorSubject } from 'rxjs';
import { Advertisment } from '../models/advertisment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http:HttpClient) { }
  private data = new BehaviorSubject<Advertisment | null>(null);
  currentData = this.data.asObservable();

  public getAllAdvertisements(pageNo:number){
    //const params = new HttpParams().set('pageNo', Number(localStorage.getItem("pageNo")!));
    const params = new HttpParams().set('pageNo', pageNo);

      return this.http.get(ApplicationUrls.apiUrl+`user/advertise?pageNo=${pageNo}`);
  }
  public getAdvertismentPageNoCount(){
    return localStorage.getItem("pageNo");

  }
  public increasePageNoCount(){
    // Get the current value from localStorage
  const value = this.getAdvertismentPageNoCount();

  // Parse the value as a number or default to 0 if it doesn't exist
  const currentValue = value ? parseInt(value, 10) : 0;

  // Increment the value by 1
  const newValue = currentValue + 1;

  // Store the updated value back in localStorage
  localStorage.setItem("pageNo", newValue.toString());
  }
  shareAdvertismentData(advertise: Advertisment) {
    this.data.next(advertise);
  }
  keywordSearch(word: string) {
    const params = new HttpParams()
      .set('searchText', word);
    return this.http.get(ApplicationUrls.apiUrl+'advertise/search',{params});
  }

}