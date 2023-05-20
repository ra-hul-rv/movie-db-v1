import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MovieCardComponent } from './movie-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [MovieCardComponent]
})
export class MovieCardModule { }
