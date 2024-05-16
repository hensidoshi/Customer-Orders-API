import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiOrdersService } from '../api-orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrl: './add-orders.component.css'
})
export class AddOrdersComponent {
  id=-1;
  btnName="Add Order"
  constructor(private __api:ApiOrdersService,private router:Router,private actRoute:ActivatedRoute){

  }
  myForm=new FormGroup({
    order_id:new FormControl('',Validators.required),
    customer_name:new FormControl('',Validators.required),
    product_id:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    total_price:new FormControl('',Validators.required),
  });
  ngOnInit(){
    if(this.actRoute.snapshot.params['id']!=null){
      this.btnName="Edit Order";
      this.id=this.actRoute.snapshot.params['id'];
      this.__api.getOrdersById(this.id).subscribe((res:any)=>{
        this.myForm.controls.order_id.setValue(res.order_id);
        this.myForm.controls.customer_name.setValue(res.customer_name);
        this.myForm.controls.product_id.setValue(res.product_id);
        this.myForm.controls.quantity.setValue(res.quantity);
        this.myForm.controls.total_price.setValue(res.total_price);
      })
    }
  }
  insert(){
    if(this.id>0){
      this.__api.update(this.id,this.myForm.value).subscribe((res:any)=>{
        this.router.navigate(['/orders']);
    });
    }
    else{
      this.__api.insert(this.myForm.value).subscribe((res:any)=>{
        this.router.navigate(['/orders']);
    }); 
    }
  }
}
