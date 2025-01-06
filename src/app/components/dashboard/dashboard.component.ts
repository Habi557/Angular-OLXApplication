import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private dashboardService: DashboardService, public router:Router,private activateRoute:ActivatedRoute,private toaster:ToastrService) { }
  public listOfAdvertisments:Advertisment[]=[];
  image:File;
  pageNo:number;

  ngOnInit(): void {
    /*let pageNo = 0;
    this.pageNo=0;
    localStorage.setItem("pageNo", pageNo.toString()); */
    this.activateRoute.queryParamMap.subscribe(params=>{   
      this.pageNo = params.get('pageNo') ? +params.get('pageNo')! : 0; // Default to 0
      console.log(this.pageNo);

    })
    this.getAllAdvertisements();
  }
  public getAllAdvertisements() {
    console.log("getAllAdvertisements "+this.pageNo);
    
    this.dashboardService.getAllAdvertisements(this.pageNo).subscribe({
      next: (result :any[]) => {
        if(result.length>0){
          console.log(result)
         // this.listOfAdvertisments=[...this.listOfAdvertisments,...result];
         this.listOfAdvertisments=result;
          console.log(this.listOfAdvertisments)

        }else{
          this.pageNo--;
          this.setPage(this.pageNo);
          this.toaster.warning("You have reached the end of the page");
        }       
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  loadMore() {
   // this.dashboardService.increasePageNoCount();
   this.pageNo++;
   console.log("loadMore "+this.pageNo);
   
    this.getAllAdvertisements();
    this.setPage(this.pageNo);
    
    }
  back(){
    this.pageNo--;
    console.log("back "+ this.pageNo);
    this.getAllAdvertisements();
    this.setPage(this.pageNo);
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
