import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

    seconds:number = 30;
    order : string = 'Pending';
    orderDetails : string = 'Waiting for confirmation';
    constructor(private router:Router) { }

    id: number = Math.floor(Math.random()*(40000-2017+1)+2)

    ngOnInit(): void {
    }
    timeLeft: number = 25;
    interval : any = 0;
    startTimer() {
        this.order ="Placed"
        this.orderDetails = "Order Placed Sucessfully"
        this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
            this.timeLeft--;
        }
        if (this.timeLeft < 10) {
            this.order ="Picked Up"
        }
        if (this.timeLeft === 0) {
            clearInterval(this.interval);
            this.order ="Delivered"
        }
        },1000)
    }
    cancelOrder() {
        this.router.navigate(['/home'])
    }
}
