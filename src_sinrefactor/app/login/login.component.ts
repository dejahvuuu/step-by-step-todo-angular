import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'novopayment'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  // JAVA
  /* Router router;

      public ClientA(Router router) {
        this.router = router;
      }

      then

      Router router = new RouterA();
      Client client = new ClientA(router);
      client.doSomething();
    */


  // Router
  // Dependency Injection
  constructor(private router: Router) {  }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)
    if (this.username === 'novopayment' && this.password === 'dummy') {
      // Redirect router.navigate
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
