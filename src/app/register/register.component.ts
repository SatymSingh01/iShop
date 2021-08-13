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
  RetailerRegister !:FormGroup;
  CustomerRegister !:FormGroup;
  customer !: Customer; //1
  retailer !: Retailer;
  userType:number=1;
  
  constructor(
    private customerservice:CustomerService,
    private retailerservice: RetailerService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
   this.CustomerRegister = this.formBuilder.group(
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

  this.RetailerRegister = this.formBuilder.group(
    {
      retailerName : ['',[Validators.required,Validators.minLength(5)]],
      retailerEmail: ['', [Validators.required, Validators.email]],
      retailerPhone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      retailerPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      confirmpassword: ['', Validators.required],

    },
    {
      validators: [Validation.match('retailerPassword', 'confirmpassword')]
    }
  );
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this. RetailerRegister.controls;
  }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.ReactiveRegister.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.ReactiveRegister.value, null, 2));
  // }


  onSubmit(){

    if(this.userType==1){
    this.customer=this.CustomerRegister.value
    console.log(this.customer)
    this.customerservice.create(this.CustomerRegister.value).subscribe(res => {
      console.log(res)
      console.log('Succesfully Registered !')
      // this.router.navigateByUrl('/loginpage/')
    });
    }

  else
  {
    this.retailer=this.RetailerRegister.value
    console.log(this.retailer)
    this.retailerservice.create(this.RetailerRegister.value).subscribe(res => {
      console.log(res)
      console.log('Succesfully Registered !')});
  }
  
  }
}
  
  