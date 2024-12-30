import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/appservices/dashboard.service';
import { Advertisment } from 'src/app/models/advertisment';

@Component({
  selector: 'app-open-advertisment',
  templateUrl: './open-advertisment.component.html',
  styleUrls: ['./open-advertisment.component.scss']
})
export class OpenAdvertismentComponent implements OnInit{
constructor(private dashboardServide:DashboardService){}
  advertisment:Advertisment;
  ngOnInit(): void {
      this.dashboardServide.currentData.subscribe({
        next:(response:any)=>{
            this.advertisment=response;
            if(response!=null){
              localStorage.setItem("advertisment",JSON.stringify(response));
            }else{
             this.advertisment= JSON.parse(localStorage.getItem("advertisment") || '{}'); 
            }
        },
        error:(err)=>{
          console.log(err);
        }
      });
      console.log(this.advertisment);
      
      if(this.advertisment==null || ''){
        console.log("if condition");
        console.log(this.advertisment);
        
        

      }
     
  }

}
