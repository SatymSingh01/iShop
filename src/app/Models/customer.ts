import { Cart } from "./cart";
import { Wishlist } from "./wishlist";

export class Customer {
    customerId !: number;
    customerName!: string;
    customerPassword !: string;
    customerEmail!: string;
    customerPhone!: string;
    userType!: string;
    cart:Cart[]=[];
    wishlist!:Wishlist[];

}
