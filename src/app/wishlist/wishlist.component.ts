import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../Models/cart';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Wishlist } from '../Models/wishlist';
import { CartService } from '../Services/cart.service';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productlist:Wishlist[]=[]
  customer!:Customer;
  cart!:any

  constructor(private cartservice:CartService,private router:ActivatedRoute,private wishlistservice:WishlistService,private customerService:CustomerService,private rou:Router) { }

  ngOnInit(): void {
    this.customerService.getById(this.router.snapshot.params['customerid']).subscribe(data=>{
      this.customer=data
    console.log(data)});
    this.customerService.getById(this.router.snapshot.params['customerid'])
  .subscribe(res=>{
    this.productlist = res.wishlist});
    
   
  }
  addtocart(productid:number,itemid:number)
  {         
        
    if(this.customer.cart.length===0)
    {
      this.cart = {productId:productid,cartproductQuantity:1,customerId:+this.router.snapshot.params['customerid']}
      this.cartservice.create(this.cart).subscribe();
    }
    else{
      this.customer.cart.forEach(element => {
        if(productid===element.productId)
        { 
          this.cart = {cartId:element.cartId,productId:productid,cartproductQuantity:element.cartproductQuantity+1,customerId:+this.router.snapshot.params['customerid']}
          this.cartservice.update(element.cartId,this.cart).subscribe();
          console.log(this.cart);
        }
        else{
          this.cart = {productId:productid,cartproductQuantity:1,customerId:+this.router.snapshot.params['customerid']}
          this.cartservice.create(this.cart).subscribe();
          this.ngOnInit();
          console.log(this.cart);
        }        
      });      
    }
     this.wishlistservice.delete(itemid).subscribe();
     alert("Item Added to cart ")
     this.rou.navigate(['/wishlist/',this.router.snapshot.params['customerid']])    

  }}

