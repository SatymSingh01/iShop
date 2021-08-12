import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cart } from '../Models/cart';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { CartService } from '../Services/cart.service';
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
  cart!:any;
  quantity:number = 1;
  constructor(private cartservice:CartService,private productservice:ProductService,private retailerservice:RetailerService,private router:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.productservice.getById(this.router.snapshot.params['productid']).subscribe((data)=>{
      console.log(data)
      this.product=data});
      
    
  
  }

  addtocart(productid:number)
  {      
    this.cart = {productId:productid,cartproductQuantity:this.quantity,customerId:1}
     this.cartservice.create(this.cart).subscribe();
  }
  plus(){this.quantity+=1}
  minus(){
    if(this.quantity>0)
    {
      this.quantity-=1}
    }

}
