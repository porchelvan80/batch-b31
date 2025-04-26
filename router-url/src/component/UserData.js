import React from 'react'
import {useParams} from 'react-router-dom'

const UserData = () => {
    const {userId}=useParams();
    //const userId=params.userId
  return (
    <div>
      <h1>Details about User{userId}</h1>
    </div>
  )
}

export default UserData
