import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class ADDPRODUCTComponent implements OnInit {
  addProduct=new FormGroup({
    productName: new FormControl(''),
    productimage: new FormControl(''),
    productdesc:new FormControl(''),
    product: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
