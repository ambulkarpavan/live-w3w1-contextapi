import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Cart from "./Cart"

const Product = () => {
  const {isAuthor} = useContext(AuthContext);
  return (
    <div>Product : { isAuthor ? "LoggedIn" : "LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product