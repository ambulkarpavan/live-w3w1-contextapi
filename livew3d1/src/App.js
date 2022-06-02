import React, {useContext, useReducer} from "react"
import './App.css';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import {CartProvider} from "./context/CartContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContex";


function App() {
  const {isLight} = useContext(ThemeContext)
 
  return (
    <div className={`App ${isLight ? "light" : "dark"}`} >
      {/* <ThemeProvider>
   <AuthProvider>
    <CartProvider>
      <Navbar />
      <Body />
    </CartProvider>
    </AuthProvider>
    </ThemeProvider> */}
    <Navbar />
      <Body />
    </div>
  );
}

export default App;



// counter code by usereducer

// import React, {useReducer} from "react"
// import './App.css';
// const reducer = (state,{type, payload}) =>{
//   switch (type){
//     case "INCREMENT":{
//       return state + payload;
//     }
//     case "DECREMENT":{
//       return state - payload;
//     }
//     default: {
//       console.log("type incorrect" , type);
//       return state;
//     }
//   }
// }

// function App() {
//   const [counter , dispatch] = useReducer(reducer,0)
//   return (
//     <div className="App">
//      Counter : {counter}
//      <div>
//        <button onClick={()=> dispatch({type:"DECREMENT",payload:1})}>-</button>
//        <button onClick={()=> dispatch({type:"INCREMENT",payload:100})}>+</button>
//      </div>
//     </div>
//   );
// }

// export default App;
