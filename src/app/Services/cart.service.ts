import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private ApiUrl = "http://localhost:50002/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.ApiUrl + '/carts/')
    
  }

  create(product:Cart):Observable<Cart>{
    return this.httpClient.post<Cart>(this.ApiUrl + '/carts/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Cart> {
    return this.httpClient.get<Cart>(this.ApiUrl + '/carts/' + id)
    
  }   
  delete(id:number)
  {
    return this.httpClient.delete<Cart>(this.ApiUrl+'/carts/'+id, this.httpOptions);
  }
}
