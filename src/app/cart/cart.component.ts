import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  customerid!:string

  constructor(private rou:Router,private customerService:CustomerService,private cartService: CartService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.customerid=this.router.snapshot.params['customerid']
  this.customerService.getById(+this.customerid)
  .subscribe(res=>{
    this.cart = res.cart;

    this.cart.forEach(element => {
      this.grandTotal+=element.cartproductQuantity*element.product.productPrice;
      
    });
   })    
  


  }
  removeItem(id: number){
    console.log("delete");
     this.cartService.delete(id).subscribe();
     this.ngOnInit()     
     this.rou.navigate(['/cart/',this.router.snapshot.params['customerid']]) 
     

  }

  // emptycart(){
  //   this.cartService.delete();
  // }
}
