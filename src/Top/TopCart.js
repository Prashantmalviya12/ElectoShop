import React from 'react'
import Tdata from './TopData'
import Slider from "react-slick";
import './Top.css'

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
  return (
    <div>
        <Slider {...settings}>
      {
        Tdata.map((value,index) => {
            return(
                <div className='box product' key={index}>
                    <div className='nameTop d-flex'>
                        <span className='tleft'>{value.para}</span>
                        <span className='tright'>{value.desc}</span>

                   </div>
                   <div className='tImg'>
                    <img src={value.cover} alt=""  style={{width:'200px', height:"120px"}}/>

                   </div> 
                   </div> 
            )
        })
      }
      </Slider>
    </div>
  )
}

export default TopCart
