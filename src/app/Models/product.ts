import { Cart } from "./cart";
import { Category } from "./category";
import { Retailer } from "./retailer";
import { Wishlist } from "./wishlist";

export class Product {
    productId !: number; 
	productName !: string; 
	productImagesrc !: string; 
	productDescription !: string; 
	productPrice!:number; 
	categoryId !: number;
	productBrand !: string;
	retailerId !: number; 
	productQuantity !: number; 
	retailer!:Retailer;
	
	
	category!:Category;

}
