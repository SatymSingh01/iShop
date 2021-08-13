import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  CustomerLogin!:FormGroup;
  userType:number=1;
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CustomerLogin = this.formBuilder.group(
      {
        customerEmail: ['', [Validators.required, Validators.email]],
        customerPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
       
      },
    );
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.CustomerLogin.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.CustomerLogin.invalid) {
      return;
    }

     console.log(JSON.stringify(this.CustomerLogin.value, null, 2));
  }
  }


