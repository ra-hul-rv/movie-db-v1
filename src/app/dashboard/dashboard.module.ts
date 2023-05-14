import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
