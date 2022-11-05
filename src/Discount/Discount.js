import React from 'react'
import DisCard from './DisCard'

const Discount = () => {
  return (
    <>
      <section className='newarrivals background'>
      <div className='container'>
            <div className='heading d-flex'>
                <div className='heading-left row f-flex'>
                    <img src='https://cdn.pixabay.com/photo/2016/12/12/22/59/red-1902863_1280.png' alt='' style={{width:'40px', height:"40px"}}/>
                    <h2>Big Deals</h2>
                </div>
                <div className='heading-right row'>
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>

                </div>
            </div>
           <DisCard/>
        </div>

      </section>
    </>
  )
}

export default Discount
