import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../Models/cart';
import { OrderDetails } from '../Models/order-details';
import { OrderItem } from '../Models/order-item';
import { CartService } from '../Services/cart.service';
import { CustomerService } from '../Services/customer.service';
import { OrderDetailsService } from '../Services/order-details.service';
import { OrderItemService } from '../Services/order-item.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public cart:Cart[]=[];
  customerid!:string
  grandTotal:number=0
  od!:any
  orderAddress!:string
  state!:string
  city!:string
  zipcode!:string
  phone!:string 
  oitems:OrderItem[]=[]
  
  //customerId orderTotal orderDate modeOfPayment 

  constructor(private orderdetails:OrderDetailsService,private orderitems:OrderItemService ,public fb:FormBuilder,private rou:Router,private customerService:CustomerService,private cartService: CartService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.customerid=this.router.snapshot.params['customerid']
    this.customerService.getById(+this.customerid)
  .subscribe(res=>{
    this.cart = res.cart;
    console.log(this.cart)
    this.cart.forEach(element => {
      this.grandTotal+=element.cartproductQuantity*element.product.productPrice;
      
    });
   }) 
   this.od=
    {
    customerId:+this.customerid,
    orderTotal:this.grandTotal,
    orderDate:new Date(),
    modeOfPayment:'CARD',
    orderAddress:this.orderAddress,
    state:this.state,
    city:this.city,
    zipcode:this.zipcode,
    phone:this.phone ,
    
    }
  
  }
  porder()
  {
    this.od=
    {
    customerId:+this.customerid,
    orderTotal:this.grandTotal,
    orderDate:'10028',
    modeOfPayment:'CARD',
    orderAddress:this.orderAddress,
    state:this.state,
    city:this.city,
    zipcode:this.zipcode,
    phone:this.phone  

    }
    console.log(this.od);
    this.orderdetails.create(this.od).subscribe();

    this.rou.navigate(['/cart/',this.customerid])
  }

}
