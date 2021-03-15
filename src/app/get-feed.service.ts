import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetFeedService {

    feedUrl = "http://localhost:9000/api/feed";
    settingsUrl = "http://localhost:9000/api/settings";
    friendsUrl = "http://localhost:9000/api/friends";
    userUrl = "http://localhost:9000/api/users";

    constructor(private http:HttpClient) { }

    // users: any[] = [];
    // fetchUser() {
    //     this.http.get(this.userUrl)
    //     .subscribe((response: any) => {
    //             this.users = response
    //         }
    //     );
    // }
    login(email: string): Observable<any>{
        return this.http.get("http://localhost:9000/users?email="+ email);
    }

    getAllFeedData() : Observable<any> {
    
        return this.http.get(this.feedUrl);
    }

    getAllSettingsData(): Observable<any> {
        return this.http.get(this.settingsUrl)
    }

    getAllFriendsData(): Observable<any> {
        return this.http.get(this.friendsUrl)
    }

    arr : any[] = [];
    fetchFriend() {
        this.http.get(this.friendsUrl)
        .subscribe((response: any) => {
                this.arr = response
            }
        );
        console.log(this.arr)
    }

    
    getFriend(id: number) {

        const friend = this.arr.find(
            (f) => {
                return f.id === id;
            }
        );
        return friend;
    }
    


}
