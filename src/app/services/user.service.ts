import { Injectable } from '@angular/core';
import { SignUp } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  userSignup(user: SignUp) {

    return this.http.post(`http://localhost:3000/users`, user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/'])
        }
      })
  }

  userAuthReload(){
    if (localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }
  }
}
