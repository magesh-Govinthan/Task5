import React,{useState}from 'react'
import'./Navbar.css'
import Card from "./Card.jsx"
import { AiOutlineProduct } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import UseEffectApi from './UseEffectApi';
// import { useNavigate } from 'react-router-dom';

function Navbar(props) {
   
 
   const handlePage=()=>{
   props.setIsopen(true)
   }
  return (
    <div className='Nav-containter'>
        <div className='nav-child1'>
      <h1><AiOutlineProduct /></h1>
      <h1>Products</h1>
      </div>
      <div className='nav-child2'>
        <input type='text' name='search' placeholder='Search'/>
        <button><FaSearch /></button>
      </div>
      <div className='navi'>
        <div class='nav-child4'>
        <h1 ><FaUserCircle /></h1>
      <h1 className="tit">Sign in</h1>
      </div>
      <div className='nav-child3' onClick={()=>handlePage()}>
        <button>{props.count}</button>
        <h1 ><BiCartAdd/></h1>
      <h1 className="tit">Cart</h1>
      </div>
      
      </div>
    {props.isopen && <Card carditem={props.cart}/> }

    </div>
  )
}

export default Navbar
