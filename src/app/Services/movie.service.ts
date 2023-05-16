import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

getMovieUrl = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';

  constructor(private http:HttpClient) { }
  getMovies() {
    return this.http.get(this.getMovieUrl,this.headers)
  }

  get headers() {
    return {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
  }
}
