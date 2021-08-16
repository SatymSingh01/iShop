import { Component, OnInit } from '@angular/core';
import { Compare } from '../Models/compare';
import { Product } from '../Models/product';
import { CompareService } from '../Services/compare.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  productlist:Product[]=[];
  compare!:Compare;
  constructor(private compareservice:CompareService,private productservice:ProductService) { }

  ngOnInit(): void {
    console.log(CompareService.comparelist)
    
    CompareService.comparelist.forEach(res=>{this.productservice.getById(res.productid).subscribe(p=>{this.productlist.push(p)})
    console.log(this.productlist)}
    )
    
    
  }

}
