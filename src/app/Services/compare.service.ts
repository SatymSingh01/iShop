import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compare } from '../Models/compare';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
    comparelist !: Compare 

  

  constructor() { }
  
  Add(productid:number)
  {
    
    this.comparelist.productId.push(productid);
    console.log(this.comparelist)
  }


}

  

 