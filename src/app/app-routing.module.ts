import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginGuard } from './authentication/guards/login.guard';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OpenAdvertismentComponent } from './components/open-advertisment/open-advertisment.component';
import { PostAdvertismentComponent } from './components/post-advertisment/post-advertisment.component';
const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  // {
  //   path:'header',component:HeaderComponent,canActivate:[LoginGuard]
  // },
  {
    path:'forgetpassword', component: ForgetPasswordComponent
  },
  {path:'dashboard',component:DashboardComponent,canActivate:[LoginGuard]},
  {path:'postadvertisment',component:PostAdvertismentComponent,canActivate:[LoginGuard]},

  {path:'opencomponent',component:OpenAdvertismentComponent,canActivate:[LoginGuard]}
  //{ path: 'dashboard', loadChildren: () => import('./pages/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),canActivate:[LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
