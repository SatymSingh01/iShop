import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css']
})
export class CategoryproductComponent implements OnInit {

 
  productlist:Product[]=[];
  retailerlist:Retailer[]=[];
  customer!:Customer;
  sort!:boolean;
  wishlistl!:any;
  categoryid!:number;
  customerid!:string;
  useractive!:boolean
  constructor(private wishlistservice:WishlistService,private customerservice:CustomerService,private productservice:ProductService,private retailerservice:RetailerService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.useractive=localStorage.getItem('isLoggedIn')==="true"
    this.router.params.subscribe(params => {
      this.categoryid = +this.router.snapshot.params['categoryid']
    console.log(this.categoryid);

    this.productservice.getAll().subscribe(data=>{      
      this.productlist=data.filter(product=>(product.categoryId===this.categoryid))});
      console.log(this.productlist);
      

      this.retailerservice.getAll().subscribe(data=>{
        console.log(data)
        this.retailerlist=data});
        this.customerservice.getById(1).subscribe(data=>{
          this.customer=data
        console.log(data)}); 
    });
    if(this.useractive)
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
    if(this.useractive)
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
    else{
      window.location.href="/cardview"
    }
    
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
