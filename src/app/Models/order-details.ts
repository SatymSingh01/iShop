import { Customer } from "./customer";
import { OrderItem } from "./order-item";

export class OrderDetails {
    orderId !: number; 
	orderTotal !: number ; 
	orderAddress !: string; 
	phone !: string; 
	zipcode !: number; 
	city !: string;
	state !: string;
	customerId !: number; 
	orderDate!:Date ;
	modeOfPayment !: string;
	customer!:Customer
	orderitem:OrderItem[]=[];


}
