import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer';
import { Retailer } from '../Models/retailer';
import { Validation } from '../Models/validation';
import { CustomerService } from '../Services/customer.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  ReactiveRegister!:FormGroup;
  customer !: Customer;
  retailer !: Retailer;
  
  constructor(
    private customerservice:CustomerService,
    private retailerservice: RetailerService,
    private formBuilder: FormBuilder,
    private router: Router) { }

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

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.ReactiveRegister.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.ReactiveRegister.value, null, 2));
  // }
usertype:number=1;
  onSubmit(){
    if(this.usertype==0){
    this.customer=this.ReactiveRegister.value
    console.log(this.customer)
    this.customerservice.create(this.ReactiveRegister.value).subscribe(res => {
      console.log(res)
      console.log('Succesfully Registered !')
      // this.router.navigateByUrl('/loginpage/')
    });
    }}}
