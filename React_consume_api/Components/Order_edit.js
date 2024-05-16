import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Edit() {
  const navigate=useNavigate();
  const params=useParams();
  const [data,setData]=useState({});

  useEffect(()=>{
    fetch("http://localhost:3003/getbyid/" + params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json();})
    .then((res)=>{
        setData(res);
    });
  },[]);
  return (
    <>
    <table class="table table-striped">
    <tbody>
    {/* <tr>
        <td>Enter ProductId:</td>
        <td>
            <input 
                value={data.prduct_id}
                onChange={(e)=>{
                setData({...data,prduct_id:e.target.value});
            }} type="text" />
        </td>
    </tr> */}

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
        fetch("http://localhost:3003/put/"+params.id,
        {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getbyid/"+params.id)});
      }}>
        Edit
      </button>
    </div>
    </>
  );
}
export default Edit;