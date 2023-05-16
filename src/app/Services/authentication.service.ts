import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isAuthenticated(): boolean {
   const auth= localStorage.getItem('isAuthenticated')
    return auth==='true'
  }
}
