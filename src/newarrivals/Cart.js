import React from 'react'
import Ndata from './NData'
import './new.css';

const Cart = () => {
  return (
    <>
     <div className='content grid product'>
        {Ndata.map((value,index) => {
            return(
                <div className='box' key={index}>
                    <div className='cartImg'>
                        <img src={value.cover} alt=""  style={{width:'100px', height:"100px"}}/>
                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                    </div>
            )
        })}

     </div>

    </>
  )
}

export default Cart
