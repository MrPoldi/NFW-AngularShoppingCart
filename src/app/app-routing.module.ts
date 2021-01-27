import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
