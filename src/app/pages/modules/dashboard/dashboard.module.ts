import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostAdvertismentComponent } from './post-advertisment/post-advertisment.component';
import { AlladvertisemtComponent, EditDialogContent } from './alladvertisemt/alladvertisemt.component';
import { FormsModule } from '@angular/forms';

///
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { ImportedmodulesModule } from 'src/app/_shared/modules/importedmodules/importedmodules.module';


@NgModule({
  declarations: [
    PostAdvertismentComponent,
    AlladvertisemtComponent,
    EditDialogContent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatTableModule,
     MatPaginatorModule,
     ImportedmodulesModule
     

     ]
})
export class DashboardModule { }
