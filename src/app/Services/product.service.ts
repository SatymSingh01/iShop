import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ApiUrl = "http://localhost:50002/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + '/product/')
    
  }

  create(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.ApiUrl + '/product/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(this.ApiUrl + '/product/' + id)    
  }   
  update(id:number, product:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.ApiUrl + '/product/' + id, JSON.stringify(product), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Product>(this.ApiUrl+'/product/'+id, this.httpOptions);
  }
}
