import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  productlist:Product[]=[];
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe(data=>{
      console.log(data)
      this.productlist=data});
  }

}
