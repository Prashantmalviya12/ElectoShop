import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


const Slidecard = () => {

    const slideData = [
        {
            title:'40%off for your First Shopping',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
            img:"https://image01.realme.net/general/20220808/1659957855919.png.webp"            
    },
        {
            title:'40%off for your First Shopping',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
            img:"http://cdn.shopify.com/s/files/1/0997/6284/products/Black-Qube_497f7144-29ea-429a-a3e2-d9829061c403_grande.png?v=1655378594"
 
    },
        {
            title:'40%off for your First Shopping',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
                img:"https://riggear-web-images.s3.ap-south-1.amazonaws.com/UploadImages/aa0a60b6-8380-4722-b179-c7d6d5596eef_full.png"

    },
        {
            title:'40%off for your First Shopping',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' ,
            img:"http://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2.png?v=1643477993"       
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
            slidesToScroll: 1,
            dots: false,
          }
        }
      ],
    appendDots:(dots) => {
        return <ul style={{margine:"0px"}}>{dots}</ul>
    }
  }
  return (
   
    <>
     <Slider {...settings}>
   {
    slideData.map((value,index) =>{
        return(
            <div className='box d-flex top' key={index}>
                <div className='left'>
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <button className='btn-primary'>Visit Collections</button>

                </div>
                <div className='right slideImg'>
                    <img src={value.img} alt ='' width='auto'/>
                </div>

            </div>
        )
    })
   }
   </Slider>
    </>
  )
}

export default Slidecard
