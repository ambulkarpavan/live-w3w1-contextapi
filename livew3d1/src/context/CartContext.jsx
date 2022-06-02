import React, {createContext, useContext, useState} from "react"
import { AuthContext } from "./AuthContext";


export const CartContext= createContext();

export const CartProvider =({children}) => {
    const {isAuthor} = useContext(AuthContext);
    const [count, setCount] = useState(0);

    const addToCart = () =>{
        setCount(count+1)
    }

    const buy=() => {
 if(isAuthor){
     console.log("can buy");
 }
 else{
     console.log("cannot buy without loggin in")
 }
    }

    return (
        <CartContext.Provider value={{count, addToCart,buy}}>{children}</CartContext.Provider>
    );
    
}