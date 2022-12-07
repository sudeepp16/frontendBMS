export default class User{
     constructor(public username:any,
          public password:any,
          public mobileNo:any,
          public email:any,
          public roles:any,
           public accountNonExpired:boolean,
           public accountNonLocked:boolean,
           public credentialsNonExpired:boolean,
           public enabled:boolean,
           public authorities:string[] ){

     }
}