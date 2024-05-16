import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiOrdersService {

  constructor(private __http: HttpClient) { }

  getAllOrders() {
    return this.__http.get('http://localhost:3003/getall');
  }
  getOrdersById(id:any){
    return this.__http.get('http://localhost:3003/getbyid/'+id)
  }
  delete(id:any){
    return this.__http.delete('http://localhost:3003/delete/'+id)
  }
  insert(form:any){
    return this.__http.post('http://localhost:3003/post',form)
  }
  update(id:any,form:any){
    return this.__http.put('http://localhost:3003/put/'+id,form)
  }
}
