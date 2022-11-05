import React from 'react'
import Shopcart from './Shopcart'
import ShopCat from './ShopCat'

const Shop = ({shopItems ,addtocart}) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d-flex'>
            <ShopCat/>
            <div className='contentWidth'>
            <div className='heading d-flex'>
                <div className='heading-left row f-flex'>
                    <h2>Mobile Phones</h2>
                </div>
                <div className='heading-right row'>
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>
                </div>
            </div>
            <div className='product-content grid1'>
                <Shopcart shopItems={shopItems} addtocart={addtocart}/>
            </div>
            </div>

        </div>

      </section>
    </>
  )
}

export default Shop
