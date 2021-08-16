import { Customer } from "./customer";
import { Product } from "./product";

export class Cart {
    cartId !: number; 
	productId !: number; 
	cartproductQuantity !: number; 
	customerId !: number; 
	customer!:Customer;
	product!:Product
	

}
