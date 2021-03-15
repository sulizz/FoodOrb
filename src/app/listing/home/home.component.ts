import { Component, OnInit } from '@angular/core';
import {GetFeedService} from '../../get-feed.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    feedList:any[] = []

    constructor(private _feedService: GetFeedService) { }
    
    ngOnInit(): void {
        this._feedService.getAllFeedData()
        .subscribe((response: any) => {
            this.feedList = response
        })
    }

}
