import React from 'react'
import Slider from "react-slick";


// const NextArrow = (props) => {
//     const {onClick} = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='next'>
//             <i className='fa fa-long-arrow-alt-right'></i>
//             </button>

//         </div>
//     )
// }
// const PrevArrow = (props) => {
//     const {onClick} = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='prev'>
//             <i className='fa fa-long-arrow-alt-left'></i>
//             </button>

//         </div>
//     )
// }
const FlashCards = ({productItem , addtocart}) => {
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
        // nextArrow:<NextArrow/>,
        // prevArrow:<PrevArrow/>
      }
  return (
    <>
    <Slider {...settings}>
   {
    productItem.map((item,index) =>{
        return (
            <div className='box' key={index}>
            <div className='product mtop'>
                <span className='discount'>{item.discount}% Off</span>
    
                <div className='imgFlash'>
                    <img src={item.cover} alt='' style={{width:'180px', height:"180px"}}/>
                    <div className='product-like'>
                        <label>0</label><br/>
                        <i className='fa-regular fa-heart'></i>
    
                    </div>
                </div>
                <div className='product-detail'>
                    <h3>{item.name}</h3>
                    <div className='rate' >
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className='price'> 
                    <h4>{item.price}.00</h4>
                    <button  onClick={()=> addtocart(item)}><i className='fa fa-plus'></i></button>
    
                    </div>
                </div>
            </div>
    
          </div>
        )
    })
   }
   </Slider>
    </>
  )
}

export default FlashCards