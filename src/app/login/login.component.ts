import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../Services/alert.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loading = false;

  CustomerLogin!:FormGroup;
  RetailerLogin !:FormGroup;
  userType!:string;
  returnUrl!: string;
   

  constructor(
    private formBuilder: FormBuilder,
    private router:ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private rou:Router ) { }
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
    this.loading = true;//(method) AuthenticationService.login(username: string, password: string, usertype: string): Observable<any>
        this.authenticationService.login(this.f.customerEmail.value, this.f.customerPassword.value)
        .pipe(first())
            .subscribe(
                data => {
                  console.log()
                    this.rou.navigate(['/productlist']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    console.log('errror')
                });

     console.log(JSON.stringify(this.CustomerLogin.value, null, 2));
              
    }

    else{
      this.submitted = true;

      // stop here if form is invalid
      if (this.RetailerLogin.invalid) {
        return;
      }
      this.loading = true;//(method) AuthenticationService.login(username: string, password: string, usertype: string): Observable<any>
          this.authenticationService.login(this.g.retailerEmail.value, this.g.retailerPassword.value)
              .pipe(first())
              .subscribe(
                  data => {
                      this.rou.navigate([this.returnUrl]);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });
  
       console.log(JSON.stringify(this.RetailerLogin.value, null, 2));

    }
  }
  }


