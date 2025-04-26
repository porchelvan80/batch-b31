import React from 'react'

const ViewCustomer = ({customers}) => {
  return (
    <div>
      <h2>CustomerList</h2>
      <ul>{customers.map((customer)=><li>{customer}</li>)}</ul>

    </div>
  )
}

export default ViewCustomer
