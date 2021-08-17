import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from '../Models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(this.ApiUrl + '/orderitems/')
    
  }

  create(product:OrderItem):Observable<OrderItem>{
    return this.httpClient.post<OrderItem>(this.ApiUrl + '/orderitems/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<OrderItem> {
    return this.httpClient.get<OrderItem>(this.ApiUrl + '/orderitems/' + id)    
  }   
  update(id:number, orderitem:OrderItem): Observable<OrderItem> {
    return this.httpClient.put<OrderItem>(this.ApiUrl + '/orderitem/' + id, JSON.stringify(orderitem), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<OrderItem>(this.ApiUrl+'/orderitems/'+id, this.httpOptions);
  }
}
