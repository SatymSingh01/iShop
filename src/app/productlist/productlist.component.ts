import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]=[];
  retailerlist:Retailer[]=[];
  customer!:Customer;
  constructor(private customerservice:CustomerService,private productservice:ProductService,private retailerservice:RetailerService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
      this.retailerservice.getAll().subscribe(data=>{
        console.log(data)
        this.retailerlist=data});
        this.customerservice.getById(1).subscribe(data=>{
          this.customer=data
        console.log(data)}); 
  }

  wishlist(productid:number)
  {           
    
    
  }
}
