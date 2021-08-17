import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../Models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Wishlist[]> {
    return this.httpClient.get<Wishlist[]>(this.ApiUrl + '/wishlists/')
    
  }

  create(product:Wishlist):Observable<Wishlist>{
    return this.httpClient.post<Wishlist>(this.ApiUrl + '/wishlists/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Wishlist> {
    return this.httpClient.get<Wishlist>(this.ApiUrl + '/wishlists/' + id)    
  }   
  update(id:number, wishlists:Wishlist): Observable<Wishlist> {
    return this.httpClient.put<Wishlist>(this.ApiUrl + '/wishlists/' + id, JSON.stringify(wishlists), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Wishlist>(this.ApiUrl+'/wishlists/'+id, this.httpOptions);
  }
}
