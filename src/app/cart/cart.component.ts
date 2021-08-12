import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/cart';
import { Product } from '../Models/product';
import { CartService } from '../Services/cart.service';
import { CustomerService } from '../Services/customer.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart:Cart[]=[];
  public grandTotal: number =0;
  public product:Product[]=[];

  constructor(private customerService:CustomerService,private cartService: CartService) { }

  ngOnInit(): void {
  this.customerService.getById(1)
  .subscribe(res=>{
    this.cart = res.cart;
  this.grandTotal = 0;})

     
  


  }
  removeItem(id: number){
     this.cartService.delete(id);

  }

  // emptycart(){
  //   this.cartService.delete();
  // }
}
