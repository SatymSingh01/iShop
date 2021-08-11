import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!:Product;
  retailer!:Retailer;
  constructor(private productservice:ProductService,private retailerservice:RetailerService,private router:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.productservice.getById(this.router.snapshot.params['productid']).subscribe((data)=>{
      console.log(data)
      this.product=data});
      console.log("retid"+this.product.retailerId);
    
  
  }

}
