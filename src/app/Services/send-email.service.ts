import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"
  // carttemp:any={productId:2,cartId:1,cartproductQuantity:5,customerId:1};
 
   httpOptions = {
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   }

  constructor(private httpClient:HttpClient) { }

  create(toEmail:string){
    console.log('create email')
    return this.httpClient.post(this.ApiUrl + '/email/', JSON.stringify(toEmail), this.httpOptions) 

  }
}
