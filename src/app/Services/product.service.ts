import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + '/products/')
    
  }

  create(products:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.ApiUrl + '/products/', JSON.stringify(products), this.httpOptions)   
  }

  getById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(this.ApiUrl + '/products/' + id)    
  }   
  update(id:number, products:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.ApiUrl + '/products/' + id, JSON.stringify(products), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Product>(this.ApiUrl+'/products/'+id, this.httpOptions);
  }

  searchHeroes(term: string): Observable<Product[]> {
    // if (!term.trim()) {
    //   return empty
    //   return ;
    // }
    return this.httpClient.get<Product[]>(`${this.ApiUrl}/?name=${term}`);
    // .pipe(
    //   tap(x => x.length ?
    //     console.log(`found heroes matching "${term}"`) :
    //      console.log(`no heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }

}
