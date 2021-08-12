import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';


const routes: Routes = [
  
  {path:'productlist', component: ProductlistComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'},
  {path:'product/:productid', component: ProductComponent},
  {path:'cart/:customerid', component: CartComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'compare', component:CompareComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
