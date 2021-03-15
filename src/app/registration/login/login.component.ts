import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../must-match.validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    formModel:FormGroup;

    constructor(private fb :FormBuilder) {
        this.formModel = this.fb.group({
            email:['', [ Validators.required, Validators.email] ],
            password:['', Validators.required],
        });
    }
    
    ngOnInit(): void {
        
    }

}
