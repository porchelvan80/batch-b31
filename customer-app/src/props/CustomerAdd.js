import React,{useState} from 'react'
import ViewCustomer from './ViewCustomer';
const CustomerAdd = () => {
  const[input,setInput]=useState("");
  const[customers,setCustomers]=useState([]);
  function addCustomer()
  {
    if(input)
    { 
      setCustomers((prev)=>[...prev,input]);
      console.log(customers);
    }
  }
  return <>
    <div>
      <h1>AddCustomer</h1>
      <input type="text"onChange={(e)=>setInput(e.target.value)}/>
      <button type="button" onClick={addCustomer} >Add</button>
    </div>
    <ViewCustomer customers={customers}/>
    </>
  
}

export default CustomerAdd
