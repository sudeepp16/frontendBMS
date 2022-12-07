import { Component, OnInit } from '@angular/core';
import Shows from '../shows';

import { UtilserviceService } from '../utilservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-show',
  templateUrl: './insert-show.component.html',
  styleUrls: ['./insert-show.component.css']
})
export class InsertShowComponent implements OnInit {

  constructor(private util:UtilserviceService, private router:Router) { }
showsid:any;
showname:any;
showtime:any;
theatre:any;
screen:any;
selecttheatre:any;
selectscreen:any;
registershows(){
  // let s=  new Shows(this.showsid,this.showname,this.showtime)
  // this.util.regshow(s).subscribe({
  //   next:(data)=>console.log(data),
  //   error:(error)=>console.log(error),
  //   complete:()=>console.log('completed')
  // });
  const obj={
    showname: this.showname,
    showtime:this.showtime,
    multiplex: {
      multiplexid: this.selecttheatre
      

    },
    screen:{
      screenid:this.selectscreen
    }
    
}
alert("Show Registered Successfully")

return this.util.regshow(obj).subscribe({
  next:(data)=>console.log(data),
  error:(error)=>console.log(error),
  complete:()=>console.log('completed')
})
}

  

  showallTheatre(){
    this.util.selectmultiplex().subscribe((data) => {
      this.theatre = data;
      console.log(this.theatre,"theatre");
    });
    
    
  }


  getScreens(){
    if(this.selecttheatre){
    this.util.selectscreen(this.selecttheatre).subscribe((data) => {
      this.screen = data;
      console.log(this.screen, "screen");
    });
  } 
  }

  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
    this.showallTheatre();
  }

}

