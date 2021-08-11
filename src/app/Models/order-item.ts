import { OrderDetails } from "./order-details";
import { Product } from "./product";

export class OrderItem {
    orderitemId !: number; 
	productId !: number; 
	orderId !: number; 
	orderitemQuantity !: number; 
	orderitemTotal !: number; 
	product!:Product
	order!:OrderDetails

}
