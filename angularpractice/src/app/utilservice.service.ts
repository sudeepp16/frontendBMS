import { ObserversModule } from '@angular/cdk/observers';
import { NgStyle } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import Login from './Login';
import Movie from './movies';
import Screen from './screen';
import Shows from './shows';
import  Theatre from './theatre';
import User from './User';


@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {

  constructor(private httpClient:HttpClient) { }

  set =new Set<User>();


  getMovie():Observable<any>{
    return this.httpClient.get(`http://localhost:8089/showmovie`);
  }

  getTheatre(movieId:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8089/theatre/${movieId}`);
  }


  getScreens1(movieid:any,theatreid:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8089/screens/${movieid}/${theatreid}`);
  }
  getShow(movieid:any,screenid:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8089/shows/${movieid}/${screenid}`);
  }

  regUser(u:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8089/register",
   {"username":u.username,"email":u.email,"mobileNo":u.mobileNo,"password":u.password},{responseType:"json"});
 
    
  }

  regThea(t:Theatre):Observable<Theatre>{
    return this.httpClient.post<Theatre>("http://localhost:8089/registermultiplex",
    {"multiplexname":t.theatrename,"location":t.location},{responseType:"json"}
    );
  }
  regmov(mo:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>("http://localhost:8089/registermovie",
    {"title":mo.title,"genre":mo.genre,"price":mo.price,"imageurl":mo.imageurl},{responseType:"json"}
    );
  }

  regshow(s:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8089/registershow"
    ,s,{responseType:"json"}
    );
  }

  regscr(ss:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8089/registerscreen",
    ss,{responseType:"json"}
    );
  }

  getMultiplex(movieId:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/theatre/${movieId}`);
  }

  getScreens(movieId:any,theatreId:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/screens/${movieId}/${theatreId}`);
  }

  getShows(movieId:any, screenId:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/shows/${movieId}/${screenId}`);
  }

  selectmultiplex():Observable<any>{    
    return this.httpClient.get<any>("http://localhost:8089/getallmultiplex")
  }

  selectscreen(theatreid:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/getscreens/${theatreid}`)
  }

  selectshow(screenid:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/getshows/${screenid}`)

  }

  selectmovie():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8089/getallmovies")
  }

  movieQueue(t:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8089/moviequeue",
    t,{responseType:"json"}
    );
  }

  getShowData(showId:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/moviequueu/${showId}`)
  }

  booking():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8089/booking",
    {responseType:"json"}
    );
  }

  getmoviename(movieid:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/getmovie/${movieid}`)
    
    
  }

  getscreenname(screenid:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/getscreenname/${screenid}`)
    
    
  }

  getmultiplexname(multiplexid:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8089/getmultiplexname/${multiplexid}`)
    
    
  }

  bookTicket(showId:any, userId:any, ticketCount:any,date:any) {
    return this.httpClient.get<any>(`http://localhost:8089/bookticket/${showId}/${userId}/${ticketCount}/${date}`);
  }




  validatelogin(login:Login):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8077/authenticate", {"username": login.username,"password":login.password},
  {observe: 'response' as 'body'})
  .pipe(map(user => {
       return user;
  }));

  }

  setUser(user: User) {
    sessionStorage.setItem('Username', user.username.toString());
    sessionStorage.setItem('password',user.password.toString());
    sessionStorage.setItem('Email', user.email.toString());
    sessionStorage.setItem('Mobile', user.mobileNo.toString());
   
    sessionStorage.setItem('Role', user.roles.toString());
  }
  getUser() {
    let user=new User("","","","","User",true,true,true,true,["roles_user"]);   
     user.username=sessionStorage.getItem('Username')??"";
    user.password=sessionStorage.getItem('password')??"";
    user.email=sessionStorage.getItem('Email')??"";
    user.mobileNo=sessionStorage.getItem('Mobile')??"";
    user.roles=sessionStorage.getItem('Role')??"";
    // user.userid=((sessionStorage.getItem('Id') as unknown) as number)??0;
    return user;
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('bearerToken', token);
  }
  getBearerToken() {
    return sessionStorage.getItem('bearerToken');
  }

  authenticate(){
    const token=this.getBearerToken();
    if(token!=null){
    return this.httpClient.post('http://localhost:8077/validate', {}, {
      headers: new HttpHeaders().set('Authorization', token)
    })}else{
      return this.httpClient.post('http://localhost:8077/validate', {}, {
        headers: new HttpHeaders().set('Authorization', "")
      })
    }
  }
}
