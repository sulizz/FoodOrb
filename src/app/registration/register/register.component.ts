import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formModel:FormGroup;
    constructor(private fb :FormBuilder,private router: Router) {
        this.formModel = this.fb.group({
            name:['',Validators.required],
            email:['', [Validators.required,Validators.email]],
            password:['', [Validators.required,Validators.minLength(5)]],
            confirmPassword:['', [Validators.required,Validators.minLength(5)]],
        },{
            validator: MustMatch('password', 'confirmPassword')
        })
    }
    
    // passMatch(fg:FormGroup) {
    //     let pass = fg.get('password')?.value;
    //     let cpass = fg.get('confirmPassword')?.value;
    //     console.log(pass)
    //     console.log(cpass)

    //     if ( pass && cpass && pass !== cpass) {
    //         return { mismatch: true }
    //     } else {
    //         return null;
    //     }
    // }
    ngOnInit(): void {
    }

    loginSubmit() {
        this.router.navigate(['/home'])
    }

}
