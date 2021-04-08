// Similar code in Java and Typescript

// package com.novopayment.springboot.web

// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AppComponent } from '../app.component';

// @ComponentScan(
//        value = "com.novopayment.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SpringBootFirstWebApplication implements SomeInterface {
export class WelcomeComponent implements OnInit {

  // String message = 'Some Welcome Message'
  message : string = 'Some Welcome Mesasage'
  name = ''


  // public SpringBootFirstWebApplication() {
  constructor(private route:ActivatedRoute) {
    /*
    https://angular.io/api/router/ActivatedRoute
    console.log(route.children);
    console.log(route.component);
    console.log(route.paramMap);
    console.log(route.params);
    console.log(route.root);
    console.log(route.routeConfig);
    console.log(route.url);
    console.log(route.snapshot);
    */


  }


  // methods
  // void init()
  ngOnInit() {
    // Compilation error
    // this.message = 5
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

}

// you can have multiple classes in a single file
export class ClassExample1 {

}

export class ClassExample2 {

}
