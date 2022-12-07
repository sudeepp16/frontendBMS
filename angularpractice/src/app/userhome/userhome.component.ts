import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(public router:Router,public utilService:UtilserviceService) { }

  


  public movie:any[]=[];
  ngOnInit(): void {    
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'user') {
      this.router.navigateByUrl("/home");
    }
    this.utilService.getMovie().subscribe(
      {
        next:(data)=> {this.movie = data
        console.log(data);
        }
      }
    );
  }
  bookShow(movieId:any){
    console.log(movieId);
    this.router.navigateByUrl(`/user-theatre/${movieId}`)
  }

}
