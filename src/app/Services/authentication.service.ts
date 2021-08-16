import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Customer } from '../Models/customer';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  customer! : any
  private ApiUrl = "http://localhost:35775/api"

  constructor(private http: HttpClient,private customerservice:CustomerService) { }
  login(email: string, password: string) {
    console.log('inside login')
    this.customerservice.getAll().subscribe(data=>{      
      this.customer=data.filter(customer=>(customer.customerEmail===email))});
      if(this.customer!= null)
     {
        if(this.customer.password===password){
        console.log('user verfied');
        localStorage.setItem('currentUser', JSON.stringify(this.customer));
        
      }
      else{
        console.log('user not verified');
      }
        
      }
      return this.customer;
    // return this.http.post<any>(this.ApiUrl + '/customers/', { customerEmail:email, customerPassword: password } )
    // //return this.http.post<any>('http://localhost:35775/api/customers', { customerEmail:email, customerPassword: password})
    //     .pipe(map(user => {
    //         // login successful if there's a jwt token in the response
    //         if (user && user.token) {
    //           console.log('success')
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //         }
    //         console.log('before user')
    //         return user;
    //     }));
        
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
