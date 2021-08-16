import { Customer } from "./customer";

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

}
