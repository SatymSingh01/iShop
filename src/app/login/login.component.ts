import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  CustomerLogin!:FormGroup;
  RetailerLogin !:FormGroup;
  userType!:string
 
  constructor(private formBuilder: FormBuilder,private router:ActivatedRoute,private rou:Router ) { }
 // constructor(private service:ApiCallService,private router:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
    this.userType = this.router.snapshot.params['usertype']
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
    this.RetailerLogin = this.formBuilder.group(
      {
        retailerEmail: ['', [Validators.required, Validators.email]],
        retailerPassword: [
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
  get g(): { [key: string]: AbstractControl } {
    return this.RetailerLogin.controls;
  }
  

  onSubmit(): void {
    this.submitted = true;

    if (this.CustomerLogin.invalid) {
      return;
    }

     console.log(JSON.stringify(this.CustomerLogin.value, null, 2));
  }
  }


