import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(public dialog: MatDialog) {}

  openMovieModal(youtubeVideoUrl: string): void {
    const dialogRef = this.dialog.open(MovieModalComponent, {
      width:'100%',
      data: { youtubeVideoUrl }
    });
  }
  toggleFavorite(): void {
    this.movie.favorite = !this.movie.favorite; 
  }
  toggleWatched(): void {
    this.movie.isWatched = !this.movie.isWatched; 
   }
}
