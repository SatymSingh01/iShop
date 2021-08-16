import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Models/customer';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer!:Customer;
  constructor(private customerservice:CustomerService,private router:ActivatedRoute, private rou:Router) { 
    

  }

  ngOnInit(): void {
    this.customerservice.getById(this.router.snapshot.params['customerid'])
  .subscribe(res=>{
    this.customer=res
  });
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  localStorage.setItem('isLoggedIn',"false")
  
  this.ngOnInit();
  window.location.href = "/productlist";
  //this.rou.navigate(['/productlist'])
}

}
