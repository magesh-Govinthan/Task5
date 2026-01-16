
import'./Card.css'


function Card(props) {
  
  const CartValue=props.carditem.filter((item)=>item.isCart===true)
  console.log(CartValue);

 const handleButton=(e)=>{
    e.target.parentNode.remove();
 }
  
  return (
    <div className='product-parent'>
    {CartValue.map((item)=>(
     
    <div className='product-dot'>
        
    <div className='product-box'>
     <div className='box' ><img src={item.image}/>  </div> 
     <div className='inner-pa'>
     <h5>{item.title}</h5>
     <h6> INR {item.price}</h6>
     </div>
     </div>
      <button className='p-btn' onClick={(e)=>handleButton(e)}>Remove</button>
      
    </div>
    )
  )
}
</div>
)

}

export default Card
