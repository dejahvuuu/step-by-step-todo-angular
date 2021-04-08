import { Injectable } from '@angular/core';

// I can use this and I can inject this in any
// place I would want to use (example: in component)
@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before: ' + this.isUserLoggedIn());
    if (username === 'novopayment' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after: ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    // user === null / is user not logged in
    return !(user === null)
  }

  isUserLogout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
