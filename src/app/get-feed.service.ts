import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetFeedService {

    feedUrl = "http://localhost:9000/api/feed";
    settingsUrl = "http://localhost:9000/api/settings";

    constructor(private http:HttpClient) { }

    getAllFeedData() : Observable<any> {
    
        return this.http.get(this.feedUrl);
    }

    getAllSettingsData(): Observable<any> {
        return this.http.get(this.settingsUrl)
    }

}
