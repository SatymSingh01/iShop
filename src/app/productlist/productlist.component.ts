import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]=[];
  retailerlist:Retailer[]=[];
  constructor(private productservice:ProductService,private retailerservice:RetailerService) { }
  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
      this.retailerservice.getAll().subscribe(data=>{
        console.log(data)
        this.retailerlist=data});
  }
}
