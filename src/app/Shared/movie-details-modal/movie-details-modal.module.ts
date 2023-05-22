import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MovieDetailsModalComponent } from './movie-details-modal.component';

@NgModule({
  declarations: [MovieDetailsModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  MatButtonModule
  ],
  exports: [MovieDetailsModalComponent]
})
export class MovieDetailsModule { }
