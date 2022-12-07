import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-theatre',
  templateUrl: './user-theatre.component.html',
  styleUrls: ['./user-theatre.component.css']
})
export class UserTheatreComponent implements OnInit {

  constructor(public route:ActivatedRoute,public utilservice:UtilserviceService, private router:Router) { }


public movieId:any;
theatreId:any;
screenId:any;
theatreList:any;
theatreHash:any;
showsList:any;
show2List:any;
showScreen:boolean = false;
showTime:boolean = false;



  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'user') {
      this.router.navigateByUrl("/home");
    }

    this.movieId=this.route.snapshot.params["movieId"];
     this.theatreList =this.utilservice.getTheatre(this.movieId).subscribe(
      {
        next:(data)=>{
          this.theatreList=data;      
          console.log(this.theatreList);
        }
      }
    );
  }
  getScreen(movieid:any,theatreid:any){
    this.showScreen = !this.showScreen;
    this.movieId=movieid;
    this.theatreId=theatreid;
    this.utilservice.getScreens1(this.movieId,this.theatreId).subscribe(
      {
        next:(data)=>{this.showsList=data;
          localStorage.setItem("theatreId",theatreid);
        }
      }
    )
    // this.router.navigateByUrl(`show/${movieid}/${theatreid}`);
  }
  getShows(movieid:any,screenid:any){
    console.log(movieid,screenid);
    this.showTime = !this.showTime;
    this.movieId=movieid;
    this.screenId=screenid;
    this.utilservice.getShow(this.movieId,this.screenId).subscribe(
      {
        next:(data)=>{
          this.show2List=data;
          console.log(data);
          localStorage.setItem("movieId",movieid);
          localStorage.setItem("screenId",screenid);
        }
      });
    }

    Book(e:any){
      localStorage.setItem("showId",e);
    }
  }


