import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Retailer } from '../Models/retailer';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  retailer!:Retailer;
  useractive!:boolean
  customerid!:string
  constructor(private retailerService:RetailerService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.snapshot.params['retailerid']
    this.useractive = localStorage.getItem('isLoggedIn')==='true'
      if(localStorage.getItem('isLoggedIn')==="true")
      {
          
        this.customerid = localStorage.getItem('currentUser')||"";  
        console.log(" id:"+this.customerid)     
      }

    this.retailerService.getById(+this.customerid).subscribe((data)=>{
      console.log(data)
      this.retailer=data});
    
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
