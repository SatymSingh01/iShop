import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"
 // carttemp:any={productId:2,cartId:1,cartproductQuantity:5,customerId:1};

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.ApiUrl + '/carts/')
    
  }

  create(cart:Cart):Observable<Cart>{
    return this.httpClient.post<Cart>(this.ApiUrl + '/carts/', JSON.stringify(cart), this.httpOptions)   
  }

  getById(id:number): Observable<Cart> {
    return this.httpClient.get<Cart>(this.ApiUrl + '/carts/' + id)
    
  }   
  delete(id:number)
  {
    console.log("delete service")
    return this.httpClient.delete<Cart>(this.ApiUrl+'/carts/'+id, this.httpOptions);
  }
    
  update(id:number, cart:Cart): Observable<Cart> {
    
      
    
    return this.httpClient.put<Cart>(this.ApiUrl + '/carts/' + id, JSON.stringify(cart), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }
  // getProducts(){
  //   return this.productList.asObservable();
  // }
  // setProduct(product :any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  // addtocart(product: any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList);

  // }
  // getTotalPrice():  number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal
  // }

  // removecartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id==a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  // }
// removeallcart(){   

//   this.cartItemList=[] 
//   this.productList.next(this.cartItemList);
// }
}
