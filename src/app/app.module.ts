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
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { AddretailerComponent } from './addretailer/addretailer.component';
import { ADDPRODUCTComponent } from './addproduct/addproduct.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminComponent } from './admin/admin.component';


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
    FooterComponent,
    WishlistComponent,
    CompareComponent,
    AddretailerComponent,
    ADDPRODUCTComponent,
    CategoryproductComponent,

    LoginComponent,
    RegisterComponent,    
    ChangepasswordComponent,
    ForgotpasswordComponent,
    AdminComponent
    
     
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
