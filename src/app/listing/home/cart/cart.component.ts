import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    
    @Input()
    selected!: any[];
    
    constructor(private router:Router) { }

    ngOnInit(): void {
    
    }
    
    placeOrder() {
        this.router.navigate(['/tracking'])
    }

    goHome() {
        this.router.navigate(['/home'])
    }
}
