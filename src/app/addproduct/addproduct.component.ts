import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class ADDPRODUCTComponent implements OnInit {
  product!:Product;
  addProduct=new FormGroup({
    productName: new FormControl(''),
    productImagesrc: new FormControl(''),
    productDescription:new FormControl(''),
    productPrice: new FormControl(''),
    productQuantity: new FormControl('')
  })

  constructor(public fb:FormBuilder,private productservice:ProductService) { }

  ngOnInit(): void {
    this.addProduct=this.fb.group(
      {
        
        productName:[],
        productImagesrc:[],
        productDescription:[],
        productPrice: [],
        productQuanitity:[],
      }
    )
  }

  addproduct()
  {
    this.product=this.addProduct.value
    console.log(this.product)
    this.productservice.create(this.addProduct.value).subscribe(res => {
      console.log(res)
      console.log('Product created!')
     
    });

  }

}
