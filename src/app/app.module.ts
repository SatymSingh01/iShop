import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RetailerComponent } from './retailer/retailer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RetailerComponent,
    OrderComponent,
    NavbarComponent,
    ProductComponent,
    ProductlistComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
