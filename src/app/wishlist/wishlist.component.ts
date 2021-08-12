import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productlist:Product[]=[]

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
  }

}
