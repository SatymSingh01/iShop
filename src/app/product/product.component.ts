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
import { WishlistService } from '../Services/wishlist.service';

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
  wishlistl!:any;
  quantity:number = 1;
  customerid!:string;
  useractive!:boolean
  

  constructor(
    private wishlistservice:WishlistService,
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
      this.useractive=localStorage.getItem('isLoggedIn')==="true"
      if(this.useractive)
      {              
        this.customerid = localStorage.getItem('currentUser')|| "";  
        console.log(" id:"+this.customerid)     
      }
      this.customerservice.getById(+this.customerid).subscribe(data=>{
        this.customer=data
      console.log(data)});      
    
  
  }

  addtocart(productid:number)
  {   if(this.useractive)
    {
      if(this.customer.cart.length===0)
    {
      this.cart = {productId:productid,cartproductQuantity:this.quantity,customerId:+this.customerid}
      this.cartservice.create(this.cart).subscribe();
    }
    else{
      this.customer.cart.forEach(element => {
        if(productid===element.productId)
        { 
          this.cart = {cartId:element.cartId,productId:productid,cartproductQuantity:element.cartproductQuantity+this.quantity,customerId:+this.customerid}
          this.cartservice.update(element.cartId,this.cart).subscribe();
          console.log(this.cart);
        }
        else{
          this.cart = {productId:productid,cartproductQuantity:this.quantity,customerId:+this.customerid}
          this.cartservice.create(this.cart).subscribe();
          this.ngOnInit();
          console.log(this.cart);
        }
        
      });

    }  
    }   
    else{
      alert("Login to add to cart")
      window.location.href="/cardview"
    }   
        
    
  }
  wishlist(productid:number)
  {     console.log('wishlist')
  if(this.useractive)
  {
    if(this.customer.wishlist.length===0)
  {
    console.log('create')
    this.wishlistl = {productId:productid,customerId:+this.customerid}
    this.wishlistservice.create(this.wishlistl).subscribe();
  }      
    
    
         this.customer.wishlist.forEach(element => {
        if(productid===element.productId)
        { 
          console.log('delete')
          this.wishlistservice.delete(element.wishlistId).subscribe();
        }
        else{
          console.log('create')
          this.wishlistl = {productId:productid,customerId:+this.customerid}
          this.wishlistservice.create(this.wishlistl).subscribe();
        }
      });  
  }
  else{
    alert("Login to add to wishlist")
    window.location.href="/cardview"
  }
  
  }
  plus(){this.quantity+=1}
  minus(){
    if(this.quantity>0)
    {
      this.quantity-=1}
    }

    addtocompare(productid:number,categoryid:number)
    {
      if(this.useractive)
      {
        console.log("added to compare")
        this.compareservice.Add(productid,categoryid);
      }
      else{
        alert("Login to compare")
        window.location.href="/cardview"
      }
    }

}
