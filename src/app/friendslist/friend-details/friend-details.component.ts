import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFeedService } from 'src/app/get-feed.service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent implements OnInit {
    
    friendsList:any[] = []
    id:number = 0;
    friend:any = {}
    

    constructor(private route: ActivatedRoute, private _feedService:GetFeedService, private router:Router ) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        
        this._feedService.getAllFriendsData()
        .subscribe((response: any) => {
            this.friendsList = response
        })
    }

    goBacktoFriends() {
        this.router.navigate(['/friends'])
    }
    
} 
