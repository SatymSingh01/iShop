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


const routes: Routes = [
  {path:'product/:productid', component: ProductComponent},
  {path:'productlist', component: ProductlistComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'},  
  {path:'cart/:customerid', component: CartComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'compare', component:CompareComponent},
  {path:'retailer', component:RetailerComponent},
  {path:'addproduct', component:ADDPRODUCTComponent},
  {path:'order/:customerid', component:OrderComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
