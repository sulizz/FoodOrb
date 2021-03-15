import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetFeedService} from '../../get-feed.service'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList:any[] = []

    constructor(private _feedService: GetFeedService,private router:Router) { }
    
    ngOnInit(): void {
        this._feedService.getAllFriendsData()
        .subscribe((response: any) => {
            this.friendsList = response
        })
    }

    gotoDetails(friend:any){
        this.router.navigate(['/friend',friend.id])
    }

}
