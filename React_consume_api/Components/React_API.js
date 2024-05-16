import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Customer_order_api() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3003/getall")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const FormatedData = data.map((temp) => {
    return (
      <div class="card col-md-3 mb-4">

        <div class="card-body">
          <h4 class="cars-text">OrderId: {temp.order_id}</h4>
          <h4 class="card-text">CustomerName: {temp.customer_name}</h4>
          <h4 class="card-text">ProductId: {temp.product_id}</h4>

          <button class="btn btn-outline-primary m-2" onClick={()=>{
          navigate("../getbyid/" + temp.order_id);
          }}>View more</button> 

          <button class="btn btn-outline-danger m-2" onClick={()=>{
          fetch("http://localhost:3003/delete/" + temp.order_id,
            {
              method:"DELETE"
            })
          }}>Delete</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button
        class="btn btn-outline-secondary m-3"
        onClick={() => {
          navigate("/insert");
        }}
      >
        Add
      </button>
      <div className="row m-2 p-2">{FormatedData}</div>
    </div>
  );
}

export default Customer_order_api;