import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]=[];
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
  }
}
