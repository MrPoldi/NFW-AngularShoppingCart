import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbButtonModule, NbLayoutModule, NbCardModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbButtonModule,
    // NbListModule,
    // NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule
  ]
})
export class ShoppingCartModule { }
