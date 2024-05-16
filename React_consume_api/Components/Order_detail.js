import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Order_detail() {
  let params=useParams();
  const navigate=useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3003/getbyid/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <div class="card col-md-3">
        <div class="card-body">
          <h4 class="card-text">OrderId: {data.order_id}</h4>
          <h4 class="card-text">CustomerName: {data.customer_name}</h4>
          <h4 class="card-text">ProductId: {data.product_id}</h4>
          <h4 class="card-text">Quantity: {data.quantity}</h4>
          <h4 class="card-text">TotalPrice: {data.total_price}</h4>
          <button class="btn btn-outline-success" 
          onClick={() => {
            navigate("/update/"+params.id);
          }}
          >
            Edit
          </button>

          <span style={{ marginRight: "10px" }}></span>

          <button
            class="btn btn-outline-danger"
            onClick={() => {
              fetch("http://localhost:3003/delete/"+params.id,
              {
                  method: "DELETE",
              })
              .then(() => {
                navigate("/getall");
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Order_detail;
