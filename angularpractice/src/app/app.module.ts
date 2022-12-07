import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegmovieComponent } from './regmovie/regmovie.component';
import { TheatreComponent } from './theatre/theatre.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegTheaterComponent } from './reg-theater/reg-theater.component';
import { InsertTheatreComponent } from './insert-theatre/insert-theatre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InsertScreenComponent } from './insert-screen/insert-screen.component';
import { InsertShowComponent } from './insert-show/insert-show.component';
import { RegMovieComponent } from './reg-movie/reg-movie.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';
import { InsertMovietheatreComponent } from './insert-movietheatre/insert-movietheatre.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserTheatreComponent } from './user-theatre/user-theatre.component';
import {MatIconModule} from '@angular/material/icon';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    RegmovieComponent,
    TheatreComponent,
    LandingComponent,
    RegTheaterComponent,
    InsertTheatreComponent,
    InsertScreenComponent,
    InsertShowComponent,
    RegMovieComponent,
    InsertMovieComponent,
    InsertMovietheatreComponent,
    UserhomeComponent,
    UserTheatreComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
