import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cart } from '../Models/cart';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { CartService } from '../Services/cart.service';
import { CompareService } from '../Services/compare.service';
import { CustomerService } from '../Services/customer.service';
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
  customer!:Customer;
  cart!:  any;
  quantity:number = 1;

  constructor(
    private customerservice:CustomerService,
    private cartservice:CartService,
    private productservice:ProductService,
    private retailerservice:RetailerService,
    private compareservice :CompareService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.productservice.getById(this.router.snapshot.params['productid']).subscribe((data)=>{
      console.log(data)
      this.product=data});
      this.customerservice.getById(1).subscribe(data=>{
        this.customer=data
      console.log(data)});      
    
  
  }

  addtocart(productid:number)
  {      
    this.customerservice.getById(1).subscribe(data=>{
      this.customer=data
    console.log(data)});

    
    
    console.log(this.cart);
    if(this.customer.cart.length===0)
    {
      this.cart = {productId:productid,cartproductQuantity:this.quantity,customerId:1}
      this.cartservice.create(this.cart).subscribe();
    }
    else{
      this.customer.cart.forEach(element => {
        if(productid===element.productId)
        { 
          this.cart = {cartId:element.cartId,productId:productid,cartproductQuantity:element.cartproductQuantity+this.quantity,customerId:1}
          
          this.cartservice.update(element.cartId,this.cart).subscribe();
        }
        else{
          this.cart = {productId:productid,cartproductQuantity:this.quantity,customerId:1}
          this.cartservice.create(this.cart).subscribe();
          console.log(element.cartId,element.productId)
        }
        
      });

    }
   
     
  }
  plus(){this.quantity+=1}
  minus(){
    if(this.quantity>0)
    {
      this.quantity-=1}
    }

    addtocompare(productid:number)
    {
      this.compareservice.Add(productid);
    }

}
