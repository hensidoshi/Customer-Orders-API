import { Component } from '@angular/core';
import { ApiOrdersService } from '../api-orders.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  data: Orders []=[];
    constructor(private __api:ApiOrdersService){

    }
    ngOnInit(){
      this.__api.getAllOrders().subscribe((res:any)=>{
        this.data=res;
        console.log(this.data);
      });
    }
    delete(id:any){
      this.__api.delete(id).subscribe((res)=>{
        this.ngOnInit();
      });
    }
}
