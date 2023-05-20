import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MovieCardModule } from '../Shared/movie-card/movie-card.module';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule, 
    MovieCardModule,
    MatGridListModule,

    

  ]
})
export class DashboardModule { }
