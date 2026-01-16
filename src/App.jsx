import Navbar from "./component/Navbar";
import UseEffectApi from "./component/UseEffectApi"
// import { Routes, Route } from "react-router-dom";
import React ,{useEffect,useState}from 'react'
import Card from "./component/Card.jsx"
// function Approutes(){
//  return(
//   <Routes>
//     <Route path="/" element={<Navbar/>}>
//     <Route path="Card" element={<Card/>}/>
    
//     </Route>
//   </Routes>
//  ) 
// }
function App() {
    const[userData,setUserData]=useState([]);
    const[isopen,setIsopen]=useState(false)
    const [cart,setCart]=useState([]);
    const CartValue=cart.filter((item)=>item.isCart===true)


     useEffect(() => {
        // Mounting Phase
        fetchData();
        
    },[])
    console.log(userData)
    const fetchData=async()=>{
        await fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((data)=>setUserData(data));
    }

  return (
    <>
    {/* <Approutes/> */}
    <div>
      
          <Navbar cart={cart} count={CartValue.length} isopen={isopen} setIsopen={setIsopen}/>
     
         <UseEffectApi
       
          userData={userData}
          setCart={setCart}
          setUserData={setUserData}
         
         />

     
     {/* <Card/> */}

    </div>
    
    </>
    
  )
}

export default App
