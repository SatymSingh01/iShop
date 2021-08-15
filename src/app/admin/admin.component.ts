import { Component, OnInit } from '@angular/core';
import { Retailer } from '../Models/retailer';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  retailers: Retailer[] = [];
  constructor(private addretailer:RetailerService) { }


  ngOnInit(): void {
    this.addretailer.getAll().subscribe((data: Retailer[])=>{
      console.log(data)
      this.retailers= data;
  })  
  }

}
