import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Customer } from '../Models/customer';
import { Retailer } from '../Models/retailer';
import { AlertService } from '../Services/alert.service';
import { AuthenticationService } from '../Services/authentication.service';
import { CustomerService } from '../Services/customer.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loading = false;
  customer!:Customer;
  retailer!:Retailer;
  CustomerLogin!:FormGroup;
  RetailerLogin !:FormGroup;
  userType!:string;
  customers!:Customer[]
  retailers!:Retailer[]
  returnUrl!: string;
   

  constructor(
    private formBuilder: FormBuilder,
    private router:ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private rou:Router ,
    private customerservice:CustomerService,
    private retailerservice:RetailerService) { }
 // constructor(private service:ApiCallService,private router:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
    localStorage.removeItem('currentUser');
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
    this.customerservice.getAll().subscribe(data=>{      
      this.customers=data
    console.log(this.customers)});
    this.retailerservice.getAll().subscribe(data=>{      
      this.retailers=data
    console.log(this.retailers)});

    //  // reset login status
    //  this.authenticationService.logout();
    // // get return url from route parameters or default to '/'
    //  this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/'; //activated router
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.CustomerLogin.controls;
  }

  get g(): { [key: string]: AbstractControl } {
    return this.RetailerLogin.controls;
  }
  

  onSubmit(): void {

    if(this.userType ==='1'){   

    this.submitted = true;
    // stop here if form is invalid
    if (this.CustomerLogin.invalid) {
      console.log("invalid user")
      return;
    }
    this.loading = true;  
      
      this.customer=this.customers.filter(customer=>(customer.customerEmail===this.f.customerEmail.value))[0]
      console.log(this.customer)
      if(this.customer!= null)
     {
        if(this.customer.customerPassword===this.f.customerPassword.value){
        console.log('user verfied');
        localStorage.setItem('currentUser', String(this.customer.customerId));
        localStorage.setItem('usertype',"customer")
        localStorage.setItem('isLoggedIn', "true");
        console.log(localStorage.getItem('currentUser'))
        this.rou.navigate(['/productlist'])
        
      }
      else{
        console.log('user not verified');
      }                
    }
  }
  else
  {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.RetailerLogin.invalid) {
      console.log("invalid user")
      return;
    }
    this.loading = true;  
      
      this.retailer=this.retailers.filter(retailer=>(retailer.retailerEmail===this.g.retailerEmail.value))[0]
      console.log(this.retailer)
      if(this.retailer!= null)
     {
        if(this.retailer.retailerPassword===this.g.retailerPassword.value){
        console.log('user verfied');
        localStorage.setItem('currentUser', String(this.retailer.retailerId));
        localStorage.setItem('usertype',"retailer")
        localStorage.setItem('isLoggedIn', "true");
        console.log(localStorage.getItem('currentUser'))
        this.rou.navigate(['/retailer'])
        
      }
      else{
        console.log('Retailer does not exist');
      }                
    }
  }
}

    
  }


