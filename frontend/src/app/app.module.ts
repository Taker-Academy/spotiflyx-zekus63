import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// Main components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
// Import login components
import { SigninComponent } from './components/login/signin.component';
import { SignupComponent } from './components/login/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  declarations: [
    // Main app
    AppComponent,
    HomeComponent,
    HeaderComponent,
    // Login
    SigninComponent,
    SignupComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule { }