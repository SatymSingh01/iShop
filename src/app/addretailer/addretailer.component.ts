import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Retailer } from '../Models/retailer';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {
  retailer!:Retailer;
  addRetailer=new FormGroup({
    retailerName: new FormControl('',Validators.required),
    retailerEmail:new FormControl('',Validators.required),
    retailerPhone: new FormControl('',Validators.required),
    retailerPassword:new FormControl(''),
  })
  

  constructor(
    public fb:FormBuilder,
    private retailerservice:RetailerService) { }




  ngOnInit(): void {
    this.addRetailer=this.fb.group(
      {
        
        retailerName:[],
        retailerEmail:[],
        retailerPhone:[],
        retailerPassword:['Newret@123'] 
      }
    )
  }
  addretailer()
  {
    this.retailer=this.addRetailer.value
    console.log(this.retailer)
    this.retailerservice.create(this.addRetailer.value).subscribe(res => {
      console.log(res)
      alert('Retailer added successfully')   
      window.location.href = "/admin";  
    });
    

}
}
