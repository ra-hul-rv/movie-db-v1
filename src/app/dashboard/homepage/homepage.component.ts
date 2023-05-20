import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/Services/movie.service';
import { movieList } from '../../Data/MovieList';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies: any = [];
  allMovies: any = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageSizeOptions: number[] = [ 10, 25, 50];
  pageSize = 10;
  totalMovies = 0;

  constructor(private movieService: MovieService, private paginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.getMovies();
    this.paginator.pageSize = this.pageSize;
    this.paginator.pageIndex = 0;
    this.paginator.pageSizeOptions = this.pageSizeOptions;
    this.paginator.showFirstLastButtons = true;
    this.paginator.length = this.totalMovies;

    this.paginatorIntl.itemsPerPageLabel = 'Movies per page:';
    this.paginatorIntl.nextPageLabel = 'Next page';
    this.paginatorIntl.previousPageLabel = 'Previous page';
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.movies = this.allMovies.slice(startIndex, endIndex);
  }

  getMovies() {
    const seriesId = ''; // Replace with the actual series ID
    this.movieService.getMovies(2010).subscribe(
      (data: any) => {
        if (!data) {
          this.allMovies = movieList;
        } else {
          this.allMovies = data;
        }
        this.totalMovies = this.allMovies.length;
        this.movies = this.allMovies.slice(0, this.pageSize);
      },
      (error: any) => {
        this.movies = movieList;
        this.allMovies = movieList;
        this.totalMovies = this.allMovies.length;
        this.movies = this.allMovies.slice(0, this.pageSize);
        console.error('Error fetching movies:', error);
      }
    );
  }
}
