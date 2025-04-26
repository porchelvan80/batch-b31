import React,{useState} from 'react'
import ViewCustomer from './ViewCustomer';
import Context from './context';
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
   <Context.Provider value={customers}>
      <h1>AddCustomer</h1>
      <input type="text"onChange={(e)=>setInput(e.target.value)}/>
      <button type="button" onClick={addCustomer} >Add</button>
   
    <ViewCustomer/>
    </Context.Provider>
    </>
  
}

export default CustomerAdd
