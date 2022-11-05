import React from 'react'
import FlashCards from './FlashCards'

const FlashDeals = ({productItem,addtocart}) => {
  return (
    <>
     <section className='flash background'>
        <div className='container'>
            <div className='heading f-flex'>
                <i className='fa fa-bolt'></i>
                <h1>Flash Deals</h1>
            </div>
            <FlashCards productItem={productItem} addtocart={addtocart}/>
        </div>
     </section>
    </>
  )
}

export default FlashDeals
