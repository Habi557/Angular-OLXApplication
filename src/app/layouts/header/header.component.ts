import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from 'src/app/appservices/dashboard.service';
import { LogoutService } from 'src/app/authentication/services/logout.service';
import { Advertisment } from 'src/app/models/advertisment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
selecteItem(_t16: Advertisment) {
throw new Error('Method not implemented.');
}

  searchText: string;
  filteredResults: Advertisment[] = [];
  constructor(private router: Router, private logoutservice: LogoutService, private dashboardService: DashboardService) { }
  keywordSearch(word: string) {
    if (this.searchText == '') {
      this.filteredResults = [];
    }
      if (word.length > 2) {
        this.dashboardService.keywordSearch(word).subscribe({
          next: (response: any[]) => {
            console.log(response)
            this.filteredResults = [...response];
          },
          error: (err) => {
            console.log(err);

          }
        })
      }
    }
    login() {
      // Redirect to login page
      console.log('Redirecting to login...');
    }
    postAd() {
      this.router.navigateByUrl('/postadvertisment');
    }
    // logout() {
    //   localStorage.clear();
    //   this.router.navigateByUrl('/login');
    // }
    // selecteItem(_t17: any) {
    // }


    

      logout(){
      let token=localStorage.getItem("token") || '{}';
      this.logoutservice.logout(token).subscribe({
        next:(response)=>{
          console.log("logout")
          console.log(response);
          localStorage.clear();
      console.log(localStorage.getItem('token'));
      //this.router.navigateByUrl('/login');

        },
        error:(err) =>{
          console.log("error")
        }
      }

      )



    }

  }
