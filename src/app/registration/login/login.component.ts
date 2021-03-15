import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GetFeedService } from 'src/app/get-feed.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    formModel:FormGroup;
    userInput = { 
        email: "",
        password: "" 
    };

    constructor(private fb :FormBuilder, private router: Router, private _feedService: GetFeedService) {
        this.formModel = this.fb.group({
            email:['', [ Validators.required, Validators.email] ],
            password:['', Validators.required],
        });
    }
    
    ngOnInit(): void {
        
    }

    loginSubmit() {
        this.router.navigate(['/home'])
    }

}
