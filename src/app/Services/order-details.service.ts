import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../Models/order-details';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<OrderDetails[]> {
    return this.httpClient.get<OrderDetails[]>(this.ApiUrl + '/orderdetails/')
    
  }

  create(product:OrderDetails):Observable<OrderDetails>{
    return this.httpClient.post<OrderDetails>(this.ApiUrl + '/orderdetails/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<OrderDetails> {
    return this.httpClient.get<OrderDetails>(this.ApiUrl + '/orderdetails/' + id)    
  }   
  update(id:number, orderdetails:OrderDetails): Observable<OrderDetails> {
    return this.httpClient.put<OrderDetails>(this.ApiUrl + '/orderdetails/' + id, JSON.stringify(orderdetails), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<OrderDetails>(this.ApiUrl+'/orderdetails/'+id, this.httpOptions);
  }
}
