import { Component, OnInit } from '@angular/core';
import User from '../User';
import { UtilserviceService } from '../utilservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName:any;
  email:any;
  mobileNumber:any;
  password:any;
  accountNonExpired:any;
  accountNonLocked:any;
  credentialsNonExpired:any;
  enabled:any;
  authorities:any;
  roles:any;





  constructor(private util:UtilserviceService) { }
  registeruser(){
    console.log(this.userName);
    console.log(this.password);
    
    console.log(this.email);
    console.log(this.mobileNumber);
    
    
    let u = new User(this.userName,this.password,this.mobileNumber,this.email,this.accountNonExpired,this.accountNonLocked,this.credentialsNonExpired,this.enabled,this.authorities,this.roles
      )
    this.util.regUser(u).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('completed')
    });
    
  }

  ngOnInit(): void {
  }

}
