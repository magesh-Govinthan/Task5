import Card from './Card';
import'./UseEffectApi.css'
import { useState,useEffect } from 'react';

function UseEffectApi(props) {
   
  
   const[carditem,setCarditem]=useState([])
  
  const handleButton=(cartItem)=>{
    
   


  const requiredId=props.userData.find(item=>item.id==cartItem)
  console.log(requiredId);
  const updatingCardItems=props.userData.map((item)=>{
    
    return(
    item.id==requiredId.id ?{...item,isCart:true}:item
    )  
  })
setCarditem(updatingCardItems);
props.setUserData(updatingCardItems)
props.setCart(updatingCardItems)

    
  }
  console.log(carditem);
  return(<div >
    {props.userData.map((item)=>
     
    <div className='product'>
    <div className='product-cointainer'>
     <div className='image'><img src={item.image}/>  </div> 
     <div className='inner-p'>
     <h2>{item.title}</h2>
     <h4> INR {item.price}</h4>
     <button id='p-btn' style={item.isCart==true?{ background:"green"}:{ background:"#ffce12"}} onClick={()=>handleButton(item.id)} >{item.isCart==true?'Already added':'Add to Cart'}</button>
      </div>
     </div>
    </div>
 
  
  )
}


  
  </div>
)

  

  
  
}

export default UseEffectApi
