import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Models/category';
import { Product } from '../Models/product';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  category:Category[]=[];
  showProfile:boolean=false;
  customerid!:string;
  useractive!:boolean;
  
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    
    this.categoryservice.getAll().subscribe(data=>{
      console.log(data)
      this.category=data});
      this.useractive = localStorage.getItem('isLoggedIn')==='true'
      if(localStorage.getItem('isLoggedIn')==="true")
      {
        this.showProfile = true;        
        this.customerid = localStorage.getItem('currentUser')||"";  
        console.log(" id:"+this.customerid)     
      }
      
      
  }

 

}
