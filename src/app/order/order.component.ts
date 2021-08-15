import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../Models/cart';
import { CartService } from '../Services/cart.service';
import { CustomerService } from '../Services/customer.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart!:any;
  constructor(private customerservice:CustomerService,private cartservice:CartService,private productservice:ProductService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.customerservice.getById(1)
    .subscribe(res=>{
      this.cart = res.cart;
    // this.grandTotal = 0;
  })
  }

}
