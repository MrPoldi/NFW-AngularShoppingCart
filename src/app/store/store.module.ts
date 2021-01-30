import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { NbButtonModule, NbCardModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbCardModule
  ]
})
export class StoreModule { }
