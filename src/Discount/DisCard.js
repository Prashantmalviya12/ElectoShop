import React from 'react'
import Ddata from './DisData'
import Slider from "react-slick";

const DisCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    
    <>
    <Slider {...settings}>
        
        {Ddata.map((value,index) => {
            return(
                <div className='box product' key={index}>
                    <div className='cartImg'>
                        <img src={value.cover} alt=""  style={{width:'auto', height:"120px"}}/>
                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                    </div>
            )
        })}
    </Slider>
    </>
  )
}

export default DisCard
