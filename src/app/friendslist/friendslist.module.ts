import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import {ListingModule} from '../listing/listing.module';
import { FriendDetailsComponent } from './friend-details/friend-details.component'


@NgModule({
  declarations: [FriendsComponent, FriendDetailsComponent],
  imports: [
    CommonModule,
    ListingModule

  ],
  exports: [
    FriendsComponent
  ]
})
export class FriendslistModule { }
 