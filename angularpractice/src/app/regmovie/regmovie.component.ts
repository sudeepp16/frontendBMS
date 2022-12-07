import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regmovie',
  templateUrl: './regmovie.component.html',
  styleUrls: ['./regmovie.component.css']
})
export class RegmovieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }
  }

}
