import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  ReactiveLogin!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ReactiveLogin = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
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
    return this.ReactiveLogin.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ReactiveLogin.invalid) {
      return;
    }

    console.log(JSON.stringify(this.ReactiveLogin.value, null, 2));
  }
  }


