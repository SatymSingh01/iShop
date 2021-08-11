import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  category:Category[]=[];
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getAll().subscribe(data=>{
      console.log(data)
      this.category=data});
  }

}
