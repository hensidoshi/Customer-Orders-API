import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiOrdersService } from '../api-orders.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-detail-orders',
  templateUrl: './detail-orders.component.html',
  styleUrl: './detail-orders.component.css'
})
export class DetailOrdersComponent {
  id=0;
  data:Orders=new Orders();
  constructor(private api:ApiOrdersService,private actRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(){
    this.id=this.actRoute.snapshot.params['id'];
    this.api.getOrdersById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
  }
  delete(){
    this.api.delete(this.id).subscribe((res)=>{
      this.router.navigate(['/orders']);
    });
  }
}
