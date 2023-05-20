import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MovieModalComponent } from './movie-modal.component';

@NgModule({
  declarations: [MovieModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  MatButtonModule
  ],
  exports: [MovieModalComponent]
})
export class MovieModalModule { }
