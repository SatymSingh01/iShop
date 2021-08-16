import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retailer } from '../Models/retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Retailer[]> {
    return this.httpClient.get<Retailer[]>(this.ApiUrl + '/retailers/')
    
  }

  create(product:Retailer):Observable<Retailer>{
    return this.httpClient.post<Retailer>(this.ApiUrl + '/retailers/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Retailer> {
    return this.httpClient.get<Retailer>(this.ApiUrl + '/retailers/' + id)    
  }   
  update(id:number, retailers:Retailer): Observable<Retailer> {
    console.log('inside update ')
    return this.httpClient.put<Retailer>(this.ApiUrl + '/retailers/' + id, JSON.stringify(retailers), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Retailer>(this.ApiUrl+'/retailers/'+id, this.httpOptions);
  }
}
