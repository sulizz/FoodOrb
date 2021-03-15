import { Component, OnInit } from '@angular/core';
import {GetFeedService} from '../../get-feed.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _feedService: GetFeedService) { }

  ngOnInit(): void {
  }

}
