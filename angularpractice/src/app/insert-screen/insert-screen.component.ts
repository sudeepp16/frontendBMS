import { Component, OnInit } from '@angular/core';
import { UtilserviceService } from '../utilservice.service';
import { Validators, FormGroup, FormControl } from '@angular/forms'
import Screen from '../screen'
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-screen',
  templateUrl: './insert-screen.component.html',
  styleUrls: ['./insert-screen.component.css']
})
export class InsertScreenComponent implements OnInit {

  constructor( private util:UtilserviceService, private router:Router) { }

 async ngOnInit() {
  let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
  await this.showallTheatre();
  }
theatre: any;
screenid:any;
screenname:any;
selecttheatre:any;

registerscreen(){
  console.log(this.selecttheatre);
  console.log(this.screenname);
  const obj={
    screename: this.screenname,
    multiplex: {
      multiplexid: this.selecttheatre,
    }
  }
  
  // let sc=new Screen(this.screenid,this.screenname,this.theatre);
  alert("Screen Registered Successfully")
  
  return this.util.regscr(obj).subscribe({
    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log('completed')
  });
}

  showallTheatre(){
    this.util.selectmultiplex().subscribe((data) => {
      this.theatre = data;
    });   
  }

}
