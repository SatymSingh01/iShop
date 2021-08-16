import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { RetailerComponent } from './retailer/retailer.component';
import { ADDPRODUCTComponent } from './addproduct/addproduct.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddretailerComponent } from './addretailer/addretailer.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { CustomerComponent } from './customer/customer.component';






const routes: Routes = [
  
  {path:'productlist', component: ProductlistComponent},
  {path:'register/:usertype', component: RegisterComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'},
  {path:'product/:productid', component: ProductComponent},
  {path:'productlist', component: ProductlistComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'},  
  {path:'wishlist/:customerid', component:WishlistComponent},
  {path:'compare/:customerid', component:CompareComponent},
  {path:'category/:categoryid', component:CategoryproductComponent},
  {path:'retailer', component:RetailerComponent},
  {path:'addproduct', component:ADDPRODUCTComponent},
  {path:'order/:customerid', component:OrderComponent},
  {path:'login/:usertype', component: LoginComponent},
  {path: 'cardview', component: CardviewComponent},
  {path: 'forgotpassword/:usertype', component: ForgotpasswordComponent},
  {path:'addretailer', component:AddretailerComponent},
  {path:'admin', component:AdminComponent},
  {path:'customer/:customerid', component:CustomerComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
