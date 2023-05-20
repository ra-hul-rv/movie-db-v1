import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'https://imdb-top-100-movies1.p.rapidapi.com/';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '15ab01738fmsh07a1ac8cecf3f09p134086jsnb313c7a13ded',
    'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getMovies(year: number): Observable<Movie[]> {
    const url = `${this.movieUrl}`;

    // Create an instance of HttpParams to hold the query parameters
    const params = new HttpParams()

    // Pass the params as an option to the HttpClient get method
    return this.http.get<Movie[]>(url, { headers: this.headers, params })
  }
}
