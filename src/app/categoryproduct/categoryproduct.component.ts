import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../Models/customer';
import { Product } from '../Models/product';
import { Retailer } from '../Models/retailer';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';
import { RetailerService } from '../Services/retailer.service';

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
  categoryid!:number;
  constructor(private customerservice:CustomerService,private productservice:ProductService,private retailerservice:RetailerService,private router:ActivatedRoute) { }

  ngOnInit(): void {
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
    
  }

  wishlist(productid:number)
  {           
    
    
  }
}
