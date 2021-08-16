import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../Models/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   private ApiUrl = "http://localhost:50002/api"
  //private ApiUrl = "http://localhost:35775/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.ApiUrl + '/admins/') 
    
  }

  getById(id:number): Observable<Admin> {
    return this.httpClient.get<Admin>(this.ApiUrl + '/admins/' + id)
    
  } 

}
