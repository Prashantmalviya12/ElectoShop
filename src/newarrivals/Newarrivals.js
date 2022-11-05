import React from 'react'
import Cart from './Cart'

const Newarrivals = () => {
  return (
    <div>
      <section className='newarrivals background'>
      <div className='container'>
            <div className='heading d-flex'>
                <div className='heading-left row f-flex'>
                    <img src='https://cdn-icons-png.flaticon.com/512/891/891448.png' alt='' style={{width:'50px', height:"50px"}}/>
                    <h2>New Arrivals</h2>
                </div>
                <div className='heading-right row'>
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>

                </div>
            </div>
            <Cart/>
        </div>

      </section>
    </div>
  )
}

export default Newarrivals
