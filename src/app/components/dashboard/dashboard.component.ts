import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DashboardService } from 'src/app/appservices/dashboard.service';
import { UploadImageService } from 'src/app/appservices/upload-image.service';
import { Advertisment } from 'src/app/models/advertisment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {  
  constructor(private dashboardService: DashboardService, public router:Router,private activateRoute:ActivatedRoute) { }
  public listOfAdvertisments:Advertisment[]=[];
  image:File;
  numberr:number;

  ngOnInit(): void {
    /*let pageNo = 0;
    this.numberr=0;
    localStorage.setItem("pageNo", pageNo.toString()); */
    this.activateRoute.queryParamMap.subscribe(params=>{   
      this.numberr = params.get('pageNo') ? +params.get('pageNo')! : 0; // Default to 0
      console.log(this.numberr);

    })
    this.getAllAdvertisements();
  }
  public getAllAdvertisements() {
    this.dashboardService.getAllAdvertisements(this.numberr).subscribe({
      next: (result :any[]) => {
        if(result.length>0){
          console.log(result)
          this.numberr++;
         // this.listOfAdvertisments=[...this.listOfAdvertisments,...result];
         this.listOfAdvertisments=result;
          console.log(this.listOfAdvertisments)

        }       
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  loadMore() {
   // this.dashboardService.increasePageNoCount();
    this.getAllAdvertisements();
    this.setPage(this.numberr);
    
    }
    iteamClicked(advertise: Advertisment) {
      this.dashboardService.shareAdvertismentData(advertise);
      this.router.navigateByUrl('/opencomponent');
    }
    setPage(page: number) {
      // Update the page number in the query parameters
      this.router.navigate([], {
        //relativeTo: this.router,
        queryParams: { pageNo: page },
        queryParamsHandling: 'merge',
      });
    }

}
