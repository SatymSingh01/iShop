import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clogin(ut:number){
    this.router.navigate([`login/${ut}`])
  }

}
