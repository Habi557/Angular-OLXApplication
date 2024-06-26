import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login.component';

////
import { JsonPipe } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ImportedmodulesModule } from './_shared/modules/importedmodules/importedmodules.module';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ForgetPasswordComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // FormsModule,
    // MatFormFieldModule,
    //  MatInputModule,
    //   MatIconModule,MatCardModule,
    //   MatTooltipModule,
    //  MatButtonModule,
    //   MatSnackBarModule,
    //   HttpClientModule
    ImportedmodulesModule
      ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
