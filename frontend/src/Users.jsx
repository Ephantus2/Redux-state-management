import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "./redux/userSlice";

const Users = () => {
    const dispatch = useDispatch()

    function handleChange(e){
        dispatch(setUsername(e.target.value))
    }
  return (
    <div>
        Enter your name here: <input placeholder="username" onChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default Users