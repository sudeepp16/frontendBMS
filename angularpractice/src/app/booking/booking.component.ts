import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SanityChecks } from '@angular/material/core';
import { UtilserviceService } from '../utilservice.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf'


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    @ViewChild('ticket', {static: false}) ticket: ElementRef;


  constructor(private utilService:UtilserviceService, private router:Router) { }
username:any;
movieName:any;
price:any;
screenName:any;
theatreName:any;
showId:any;
showMap:any;
dateArray: any;
selectedDate: any;
show:any;
value:any='';
msg:string='';
userid:any;
  ngOnInit(): void {
    this.userid=localStorage.getItem('user_id');

    let userData:any = JSON.parse(localStorage.getItem('user_data')||`{}`);
    if(userData.roles !== 'user') {
      this.router.navigateByUrl("/home");
    }
    //this.a=localStorage.getItem("user_id");
    this.username=localStorage.getItem("user_name");
    this.showId=localStorage.getItem("showId");
    // this.utilService.getmoviename(localStorage.getItem("movieId")).subscribe({
    //   next:(data)=>{
    //     this.movieName=data.title;
    //     this.price=data.price;
    //   }
    // })

    // this.utilService.getscreenname(localStorage.getItem("screenId")).subscribe({
    //   next:(data)=>{
    //     console.log(data)
    //     this.screenName=data.screename;
    //     console.log(this.screenName)
       
    //   }
    // })

    // this.utilService.getmultiplexname(localStorage.getItem("theatreId")).subscribe({
    //   next:(data)=>{
    //     this.theatreName=data.multiplexname;
       
    //   }
    // })
    this.utilService.getShowData(this.showId).subscribe({
      next: (data) => {
        this.showMap = data.reduce((shows:any, d:any)=> {
          shows[d.date] = d;
          return shows;
        },{});
        this.dateArray = Object.keys(this.showMap);
        this.selectedDate = this.dateArray[0];
        this.show = this.showMap[this.selectedDate];
      }
    })
   
  }

  change(){
      
       console.log(this.value)
       this.msg=`->The price of the Selected seats id is: Rupees ${this.value}<-`;
       return this.value;
    }

  changeDate() {
    this.show = this.showMap[this.selectedDate];
  }

  async bookticket() {
    this.utilService.bookTicket(this.showId,this.userid, this.value,this.selectedDate).subscribe({
      next: (data) => console.log(data)
    });
    const doc = new jsPDF("p", "pt", "a4");

    const ticketPdf = this.ticket.nativeElement;

    
    await doc.html(ticketPdf.innerHTML);

    doc.save('tableToPdf.pdf');
    alert("Booking Successful :)")
  }
}
