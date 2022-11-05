import React from 'react'
import './Shop.css'

const ShopCat = () => {
    const data = [
        {
          cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png",
          cateName: "Apple",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-1993.png",
          cateName: "Samsung",
        },
        {
          cateImg: "https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png",
          cateName: "Oppo",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.png",
          cateName: "Vivo",
        },
        {
          cateImg: "https://www.logo.wine/a/logo/Redmi_1/Redmi_1-Logo.wine.svg",
          cateName: "Redmi",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png",
          cateName: "Sony",
        },
      ]
  return (
    <>
     <div className='category'>
        <div className='chead d-flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f-flex' key={index}>
              <img src={value.cateImg} alt='' style={{width:"40px", height:"40px"}} />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
      
    </>
  )
}

export default ShopCat
