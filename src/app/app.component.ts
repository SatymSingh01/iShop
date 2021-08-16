import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationStart, ResolveEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProjectLTI';
  // constructor(private route:Router){}
  showHead: boolean = true;
  hideroute:string[]=['/login/1','/login/0','/cardview','/register/1','/register/0','/forgotpassword/0','/admin','/addretailer','/retailer','/addproduct']
  constructor(private location: Location,private router :Router) {
   
   
   
  
}
ngOnInit(){
  console.log(this.location.path())
  this.router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      
        if (this.hideroute.includes(event['url'])) {
          this.showHead = false;
        } else {
          
          this.showHead = true;
        }
        
      
      
    }
  });

}
}
