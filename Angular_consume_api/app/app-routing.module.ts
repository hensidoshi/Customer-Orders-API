import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { DetailOrdersComponent } from './detail-orders/detail-orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"orders",component:OrdersComponent},
  {path:"orders/add",component:AddOrdersComponent},
  {path:"orders/edit/:id",component:AddOrdersComponent},
  {path:"orders/:id",component:DetailOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
