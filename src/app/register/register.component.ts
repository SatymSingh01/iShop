import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../Models/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  ReactiveRegister!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.ReactiveRegister = this.formBuilder.group(
    {
      name: ['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      confirmpassword: ['', Validators.required],

    },
    {
      validators: [Validation.match('password', 'confirmpassword')]
    }
  );
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.ReactiveRegister.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ReactiveRegister.invalid) {
      return;
    }

    console.log(JSON.stringify(this.ReactiveRegister.value, null, 2));
  }
}

