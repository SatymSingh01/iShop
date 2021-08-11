import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retailer } from '../Models/retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  private ApiUrl = "http://localhost:50002/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Retailer[]> {
    return this.httpClient.get<Retailer[]>(this.ApiUrl + '/retailer/')
    
  }

  create(product:Retailer):Observable<Retailer>{
    return this.httpClient.post<Retailer>(this.ApiUrl + '/retailer/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Retailer> {
    return this.httpClient.get<Retailer>(this.ApiUrl + '/retailer/' + id)    
  }   
  update(id:number, retailer:Retailer): Observable<Retailer> {
    return this.httpClient.put<Retailer>(this.ApiUrl + '/retailer/' + id, JSON.stringify(retailer), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Retailer>(this.ApiUrl+'/retailer/'+id, this.httpOptions);
  }
}
