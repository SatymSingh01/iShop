import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Retailer } from '../Models/retailer';
import { RetailerService } from '../Services/retailer.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  retailer!:Retailer;
  constructor(private retailerService:RetailerService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.snapshot.params['retailerid']
    this.retailerService.getById(3).subscribe((data)=>{
      console.log(data)
      this.retailer=data});
    
  }

}
