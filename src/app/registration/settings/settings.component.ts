import { Component, OnInit } from '@angular/core';
import {GetFeedService} from '../../get-feed.service'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    
    settingsList:any[] = []

    constructor(private _feedService: GetFeedService) { }
    
    ngOnInit(): void {
        this._feedService.getAllSettingsData()
        .subscribe((response: any) => {
            this.settingsList = response
        })
    }

}
