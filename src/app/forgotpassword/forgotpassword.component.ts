import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
userType!: string
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.userType = this.router.snapshot.params['usertype']
  }

}
