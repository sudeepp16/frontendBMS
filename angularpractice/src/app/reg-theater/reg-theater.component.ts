import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-theater',
  templateUrl: './reg-theater.component.html',
  styleUrls: ['./reg-theater.component.css']
})
export class RegTheaterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
  }

}
