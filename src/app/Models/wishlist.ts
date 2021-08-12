import { Customer } from "./customer";
import { Product } from "./product";

export class Wishlist {
    wishlistId !: number; 
	productId !: number; 
	customerId !: number;
	product!:Product
	customer!:Customer

}
