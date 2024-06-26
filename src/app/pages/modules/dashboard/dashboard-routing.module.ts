import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAdvertismentComponent } from './post-advertisment/post-advertisment.component';
import { AlladvertisemtComponent } from './alladvertisemt/alladvertisemt.component';
import { CandeactivateGuard } from 'src/app/authentication/guards/candeactivate.guard';

const routes: Routes = [
  {path:'post',component:PostAdvertismentComponent,canDeactivate:[CandeactivateGuard]},
  {path:'alladvertisment',component:AlladvertisemtComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
