import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Wishlist } from '../Models/wishlist';
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

  constructor(private wishlistservice:WishlistService,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getById(1)
  .subscribe(res=>{
    this.productlist = res.wishlist});
   
  }

}

