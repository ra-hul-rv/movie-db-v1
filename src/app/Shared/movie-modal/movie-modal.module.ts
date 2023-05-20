import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MovieModalComponent } from './movie-modal.component';

@NgModule({
  declarations: [MovieModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [MovieModalComponent]
})
export class MovieCardModule { }
