import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Movie from '../movies';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-insert-movie',
  templateUrl: './insert-movie.component.html',
  styleUrls: ['./insert-movie.component.css']
})
export class InsertMovieComponent implements OnInit {
title:any;
url:any;
genre:any;
price:any;
movieid:any;

theatre:any;

  constructor( private util:UtilserviceService,private router:Router) { }

  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
  }

  registermovie(){
    alert("Movie Registered Successfully")
    let mo =new Movie(this.movieid,this.title,this.genre,this.price,this.theatre,this.url)
   alert("Movie Registered Succesfully")
    return this.util.regmov(mo).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('completed')
    });
  
  }
}
