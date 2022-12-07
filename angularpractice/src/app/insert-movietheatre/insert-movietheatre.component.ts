import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilserviceService } from '../utilservice.service';
import { Router } from '@angular/router';
// import jsPDF from 'jspdf'


@Component({
  selector: 'app-insert-movietheatre',
  templateUrl: './insert-movietheatre.component.html',
  styleUrls: ['./insert-movietheatre.component.css']
})
export class InsertMovietheatreComponent implements OnInit {

  // @ViewChild('ticket', {static: false}) ticket: ElementRef;

  constructor(private util:UtilserviceService, private router:Router) { }

  movie:any;
  theatre:any;
  screen:any;
  show:any;
  fromdate:any;
  todate:any;
  movieList:any;
  theatreList:any;
  screenList:any;
  showList:any;
  availableSeats:any;
  
  ngOnInit(): void {
    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'admin') {
      this.router.navigateByUrl("/userhome");
    }

    this.util.selectmovie().subscribe((data) => {

      this.movieList = data;
      console.log(this.movieList)
     
    },
    
    (err)=>{
      console.log(err);
    });


    

  }

   getTheatres() {

    

   if(this.movie){
this.util.selectmultiplex().subscribe({
  next:(data)=>{
    this.theatreList=data;
    
  }
  ,error:(err)=>{
console.log(err);
  }
})


  //    this.util.getMultiplex(this.movie).subscribe((data) => {

  //      this.theatreList = data;
  //      console.log(this.theatreList)
  //    });
  //  }
  }}

  getScreens(e:any) {
    console.log(`${ this.movie} ${this.theatre}`)
    if(this.theatre){
      this.util.selectscreen(this.theatre).subscribe((data) => {
        this.screenList = data;
      });
    }
  }

  getShows() {
    if(this.movie && this.screen){
      this.util.selectshow(this.screen).subscribe((data) => {
        this.showList = data;
      });
    }
  }

  async linkMovieAndShow(){
    console.log(this.show);
    const obj={
      movie: {
        movieid: this.movie,
      },
      shows: {
        showsid: this.show,
      },
      availableseats: this.availableSeats,
      fromdate: this.fromdate,
      todate: this.todate
    };
    this.util.movieQueue(obj).subscribe((data) => {
      console.log(data);
    });



alert("Assigning Theatre to Movie  Successfully")
    // const doc = new jsPDF("p", "pt", "a4");

    // const pdfTable = this.ticket.nativeElement;

    
    // await doc.html(pdfTable.innerHTML);

    // doc.save('tableToPdf.pdf');

  }

}
