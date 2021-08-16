import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { Wishlist } from '../Models/wishlist';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]=[];
  retailerlist:Retailer[]=[];
  customer!:Customer;
  sort:any;
  wishlistl!:any;
  customerid!:string;
  constructor(private wishlistservice:WishlistService,private customerservice:CustomerService,private productservice:ProductService,private retailerservice:RetailerService) { }

  ngOnInit(): void {
    
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
      this.retailerservice.getAll().subscribe(data=>{
        console.log(data)
        this.retailerlist=data});
        if(localStorage.getItem('isLoggedIn')==="true")
       {
              
        this.customerid = localStorage.getItem('currentUser')|| "";  
        console.log(" id:"+this.customerid)    
        this.customerservice.getById(+this.customerid).subscribe(data=>{
          this.customer=data
        console.log(data)});  
      }
        
  }

  wishlist(productid:number)
  {     
    console.log('wishlist')
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

      sortf(){
        console.log(this.sort);
        if(this.sort==false)
        {
          this.productlist.sort((a, b) => (a.productPrice < b.productPrice ? -1 : 1));
        }
        else{
          this.productlist.sort((a, b) => (a.productPrice > b.productPrice ? -1 : 1));
        }
        

      }
}
