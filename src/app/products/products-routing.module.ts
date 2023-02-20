import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WishListComponent } from './wish-list/wish-list.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'bill', component: BillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
