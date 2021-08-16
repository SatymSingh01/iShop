import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compare } from '../Models/compare';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
    public static comparelist: Compare[]=[] 
    static categoryId:number=0
    compare!:Compare

  

  constructor() { }
  
  Add(productid:number,categoryid:number)
  {
    this.compare={productid};
    if(CompareService.categoryId!=0  && CompareService.comparelist.length!==4){
      if(categoryid===CompareService.categoryId)
      {
        console.log("push")
        CompareService.comparelist.push(this.compare);
      }      
      else{
        console.log("Different Category")
        alert("Category is Different")
      }
    }
    else{
      CompareService.categoryId=categoryid
      CompareService.comparelist.push(this.compare);
    }   
  }
  get(){
    return CompareService.comparelist
  }


}

  

 