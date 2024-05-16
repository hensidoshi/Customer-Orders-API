import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Add() {
  const navigate=useNavigate();
  const [data,setData]=useState({});

  return (
    <>
    <table class="table table-striped">
    <tbody>
    <tr>
        <td>Enter OrderId:</td>
        <td>
            <input 
                value={data.order_id}
                onChange={(e)=>{
                setData({...data,order_id:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter CustomerName:</td>
        <td>
            <input 
                value={data.customer_name}
                onChange={(e)=>{
                setData({...data,customer_name:e.target.value});
            }} type="text" />   
        </td>
    </tr>

    <tr>
        <td>Enter ProductId:</td>
        <td>
            <input 
                value={data.product_id}
                onChange={(e)=>{
                setData({...data,product_id:e.target.value});
            }} type="text" />
        </td>
    </tr>
        
    <tr>
        <td>Enter Quantity:</td>
        <td>
            <input 
                value={data.quantity}
                onChange={(e)=>{
                setData({...data,quantity:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter TotalPrice:</td>
        <td>
            <input 
                value={data.total_price}
                onChange={(e)=>{
                setData({...data,total_price:e.target.value});
            }} type="text" />
        </td>
    </tr>
    </tbody>
    </table>

    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-secondary" onClick={()=>{
        //console.log(data);
        fetch("http://localhost:3003/post",
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getall")});
      }}>
        Add
      </button>
    </div>
    </>
  );
}
export default Add;