import { NgModule } from '@angular/core';
import { LoginComponent } from './Login/login.component';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
      CommonModule,
      AuthenticationRoutingModule,
      FormsModule,
      MatSlideToggleModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatInputModule,
      MatSortModule,
      MatTableModule,
      MatIconModule,
      MatSelectModule,
      MatCardModule,
      MatRadioModule,
      
  ],
  providers: [],
})
export class AuthenticationModule { }
