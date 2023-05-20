import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/Services/movie.service';
import {movieList} from '../../Data/MovieList'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) { }


  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const seriesId = ''; // Replace with the actual series ID
    this.movieService.getMovies(2010).subscribe(
      (data: any) => {
        if(!data){
          
          this.movies = movieList; 
          return
        }
        this.movies = data; 
        console.log(data)
      },
      (error: any) => {
        this.movies = movieList; 
        console.error('Error fetching movies:', error);
      }
    );
  }
}
