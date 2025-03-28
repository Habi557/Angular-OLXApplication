import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
 ///
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
 import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

 import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
     MatInputModule,
      MatIconModule,MatCardModule,
      MatTooltipModule,
     MatButtonModule,
      MatSnackBarModule,
      HttpClientModule,
      MatToolbarModule,
      MatListModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatBadgeModule
  ],
  exports:[CommonModule,
    FormsModule,
    MatFormFieldModule,
     MatInputModule,
      MatIconModule,MatCardModule,
      MatTooltipModule,
     MatButtonModule,
      MatSnackBarModule,
      HttpClientModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatBadgeModule
    ]
})
export class ImportedmodulesModule { }
