import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


// https://angular.io/guide/ngmodules  @NgModule decorator
@NgModule({
  // these five components are part of this specific Angular module
  // declarations: The components, directives, and pipes that belong to this NgModule.
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent
  ],
  // exports: The subset of declarations that should be visible and
  // usable in the component templates of other NgModules.
  exports: [],
  // imports: Other modules whose exported classes are needed by component templates
  // declared in this NgModule.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: Creators of services that this NgModule contributes to the global collection of
  // services; they become accessible in all parts of the app.
  // (You can also specify providers at the component level.)
  providers: [],
  // bootstrap: The main application view, called the root component, which hosts all other app views.
  // Only the root NgModule should set the bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }


// Example

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
*/
