import { Component, OnInit } from '@angular/core';
import Theatre  from '../theatre';
import { UtilserviceService } from '../utilservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-theatre',
  templateUrl: './insert-theatre.component.html',
  styleUrls: ['./insert-theatre.component.css']
})
export class InsertTheatreComponent implements OnInit {
Theatreid:any;
multiplexname:any;
Location:any;
flag:any = false;
  constructor(private util:UtilserviceService, private router:Router) { }

  registerTheatre(){
    let t = new Theatre(this.Theatreid,this.Location,this.multiplexname)
    this.util.regThea(t).subscribe({
      next:(data)=>{
        console.log(data);
        this.flag = true;
        this.multiplexname='';
        this.Location='';
      },
      error:(error)=>console.log(error),
      complete:()=>console.log('completed')
    });
  }

  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
  }

}
