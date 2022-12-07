import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { RegTheaterComponent } from './reg-theater/reg-theater.component'
import { InsertTheatreComponent } from './insert-theatre/insert-theatre.component';
import { InsertScreenComponent } from './insert-screen/insert-screen.component';
import { InsertShowComponent } from './insert-show/insert-show.component';
import { RegMovieComponent } from './reg-movie/reg-movie.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';
import { InsertMovietheatreComponent } from './insert-movietheatre/insert-movietheatre.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserTheatreComponent } from './user-theatre/user-theatre.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '',component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'home',component:HomeComponent},
  { path: 'register-theater',component:RegTheaterComponent},
  { path: 'insert-theatre', component:InsertTheatreComponent},
  { path: 'insert-screen', component:InsertScreenComponent},
  { path: 'insert-show', component:InsertShowComponent},
  { path: 'register-movie', component:RegMovieComponent},
  { path: 'insert-movie', component:InsertMovieComponent},
  { path: 'insert-movietheatre', component:InsertMovietheatreComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'user-theatre/:movieId',component:UserTheatreComponent},
  {path:'booking',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
