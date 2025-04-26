import React,{ useContext } from 'react'
import Context from './context'
const ViewCustomer = ({Customers}) => 
  {
    const customers=useContext(Context);
  return (
    <div>
      <h2>CustomerList</h2>
      <ul>{customers.map((customer)=><li>{customer}</li>)}</ul>

    </div>
  )
}

export default ViewCustomer
