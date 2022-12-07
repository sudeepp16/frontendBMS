import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Login from '../Login';
import User from '../User';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private util:UtilserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  username:string="";
  loginList:any
  password:string="";
  roles:string="";
  @Output()
loginEvent = new EventEmitter<string>();
u:User=new User("","","","","User",true,true,true,true,["roles_user"]);
  res:any;
  validatelogin(){
    console.log(this.username,this.password)
    this.util.validatelogin(new Login(this.username,this.password,this.roles)).subscribe(
        (data) => {
          this.loginList=data;
          console.log(this.loginList.body.roles);
          console.log(data.roles);
          if(this.loginList.status){
            console.log(data)
           localStorage.setItem("user_data",JSON.stringify(this.loginList.body));
           localStorage.setItem("user_id",this.loginList.body.userid);
           localStorage.setItem("user_name",this.loginList.body.username);



           if(this.loginList.body.roles === "user"){
              console.log("user");
              this.router.navigateByUrl("/userhome");
            }
            else if(this.loginList.body.roles === "admin"){
              console.log("admin");
              this.router.navigateByUrl("/home");
            }
          }
          else{
            console.log('Invalid Credentials')
          }
      //     this.u=data.body;
      //     console.log(this.u.username);
      //    // console.log(this.u.userid);
      //     console.log(data.headers.get('Authorization'));
      // this.util.setBearerToken(data.headers.get('Authorization')??"");
      // console.log(this.util.getBearerToken());
      //       this.util.setUser(this.u);
      //       console.log(this.util.getUser());
          //  this.router.navigateByUrl("/home");
        },
        error => {
         console.log(error);
         this.res="Please enter correct details";
        }
// {
//    next:(data)=>{console.log(data);
//     if(data=="false"){
//       this.res="Please enter correct details"
//     }else{
//       this.u=data.user;
//       this.utilService.setBearerToken(data.token.Authorization[0]);
//       console.log(this.utilService.getBearerToken());
//       this.utilService.setUser(this.u);
//       console.log(this.utilService.getUser());
//       this.loginEvent.emit("dashboard");
//     }
//    },
//    error:(err)=>{
//      console.log(err);
//      this.res="Please enter correct details"
//    }
//  }
      );
      if(this.username!="" && this.password!=""){
        alert("success")
      }
  }
goToRegister(){
  this.loginEvent.emit("register");
}
  // authenticate(){
  //   this.utilService.authenticate().subscribe({
  //     next:(data)=>{console.log(data)}
  //   }
  //   );
  // }
}


