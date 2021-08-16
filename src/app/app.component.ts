import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProjectLTI';
  // constructor(private route:Router){}
  showHead: boolean = true;
  constructor(public router: Router) {
    if(this.router.url==='/login/1' || this.router.url=='/cardview' )
  {
    this.showHead=false

  }
   
   
  
}
ngOnInit(){
  if(this.router.url=='/login/1' )
  {
    this.showHead=false

  }

}
}
