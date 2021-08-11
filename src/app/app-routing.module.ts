import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'productlist', component: ProductlistComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'},
  {path:'product', component: ProductComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
