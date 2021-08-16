import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Customer } from '../Models/customer';
import { Retailer } from '../Models/retailer';
import { Validation } from '../Models/validation';
import { AlertService } from '../Services/alert.service';
import { CustomerService } from '../Services/customer.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  loading = false;

  RetailerRegister !:FormGroup;
  CustomerRegister !:FormGroup;
  customer !: Customer; //1
  retailer !: Retailer;
  userType !: string ;
  
  constructor(
    private customerservice:CustomerService,
    private retailerservice: RetailerService,
    private formBuilder: FormBuilder,
    
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //FOR CUSTOMER FORM
    this.userType = this.route.snapshot.params['usertype']
   this.CustomerRegister = this.formBuilder.group(
    {
      customerName: ['',[Validators.required,Validators.minLength(3)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      customerPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      confirmpassword: ['', Validators.required],

    },
    {
      validators: [Validation.match('customerPassword', 'confirmpassword')]
    }
  );


//FOR RETAILER FORM
  this.RetailerRegister = this.formBuilder.group(
    {
      retailerName : ['',[Validators.required,Validators.minLength(3)]],
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
    return this. CustomerRegister.controls;
    
  }
  get g(): { [key: string]: AbstractControl } {
    return this. RetailerRegister.controls;
  }
  // //for customer
  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.CustomerRegister.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.CustomerRegister.value, null, 2));
  // }
  // //For Retailer
  // onCheck(): void {
  //   this.submitted = true;

  //   if (this.RetailerRegister.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.RetailerRegister.value, null, 2));
  // }

  onSubmit(){

    if(this.userType=='1'){

      this.submitted = true;

      // stop here if form is invalid
      if (this.CustomerRegister.invalid) {
          return;
      }

      this.loading = true;




    this.customer=this.CustomerRegister.value
    console.log(this.customer)
    this.customerservice.create(this.CustomerRegister.value)
    .pipe(first())
    .subscribe(
      res => {
        console.log(res)
        console.log('Succesfully Registered !')
        //this.alertService.success('Registration successful', true);
        this.router.navigateByUrl('/login/1')
    },
    error => {
     // this.alertService.error(error);
      this.loading = false;
      
    });
    }

  else
  {
    this.submitted = true;

      // stop here if form is invalid
      if (this.RetailerRegister.invalid) {
          return;
      }

      this.loading = true;


    this.retailer=this.RetailerRegister.value
    console.log(this.retailer)
    this.retailerservice.create(this.RetailerRegister.value)
    .pipe(first())
    .subscribe(
      res => {
      console.log(res)
      console.log('Succesfully Registered !')
     // this.alertService.success('Registration successful', true);
      this.router.navigateByUrl('/login/0')
    },
    error => {
     // this.alertService.error(error);
      this.loading = false;
    });
  }
  
}}
