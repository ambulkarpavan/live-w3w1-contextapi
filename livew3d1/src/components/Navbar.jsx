import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContex';
import Wishlist from "./Wishlist"

const Navbar = () => {
  const {isAuthor,login,logout} = useContext(AuthContext);
  const {buy} = useContext(CartContext);
  const {isLight,toggleTheme} = useContext(ThemeContext);
  return (
    <div>Navbar
      <button onClick={()=>{
      if(isAuthor) logout();
      else login("R", "Z")}}>{isAuthor ? "Logout" : "Login"}
      </button>
      <button onClick={buy}> Buy</button>
      <button onClick={toggleTheme}>{`make ${isLight ? "Dark" : "Light"}`}</button>
     
     { isAuthor &&  <Wishlist/>}
    </div>
  )
}

export default Navbar