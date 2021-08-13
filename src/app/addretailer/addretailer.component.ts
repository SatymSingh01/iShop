import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {
  retailer=new FormGroup({
    retailerid: new FormControl('',Validators.required),
    retailername: new FormControl('',Validators.required),
    retaileremail:new FormControl('',Validators.required),
    retailermobile: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
