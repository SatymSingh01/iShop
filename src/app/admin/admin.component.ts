import { Component, OnInit } from '@angular/core';
import { Retailer } from '../Models/retailer';
import { RetailerService } from '../Services/retailer.service';
import { SendEmailService } from '../Services/send-email.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  retailers: Retailer[] = [];
  retailer :any;
  constructor(private addretailer:RetailerService, private sendemail: SendEmailService) { }


  ngOnInit(): void {
    this.addretailer.getAll().subscribe((data: Retailer[])=>{
      console.log(data)
      this.retailers= data;

  })  
  }

approveEmail(toEmail:string,retailer:Retailer){
  this.retailer={retailerId:retailer.retailerId,retailerName:retailer.retailerName , retailerPassword:retailer.retailerPassword,
    retailerEmail:retailer.retailerEmail,retailerPhone:retailer.retailerPhone,verificationStatus:'true' }
    console.log(retailer.retailerId )
  this.addretailer.update(retailer.retailerId,this.retailer).subscribe();
  this.ngOnInit();
  // this.sendemail.create(toEmail).subscribe();
  // console.log('Product created!') 

}
}
