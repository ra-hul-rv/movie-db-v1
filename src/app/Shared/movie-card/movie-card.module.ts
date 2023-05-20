import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MovieCardComponent } from './movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [MovieCardComponent]
})
export class MovieCardModule { }
