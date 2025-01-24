import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/appservices/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
    constructor(private loaderService:LoaderService){}
  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((loading) => {
      this.isLoading = loading;
    });  }
  isLoading = false;

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }
}
