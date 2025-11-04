import React from 'react'
import { useSelector } from 'react-redux'

const Userslist = () => {
    const username = useSelector(
        (state) => state.user.username
    )
  return (
    <div>
        {username && <h1>hello {username}!</h1>}   
    </div>
  )
}

export default Userslist