import React from 'react'

const Categories = () => {
    const data = [
        {
           name: "Cameras&Accessories",
           cateImg: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png'
   },
        {
           name: "Computer&Laptop",
           cateImg: 'https://www.freeiconspng.com/thumbs/computer-icon/computer-icon--icon-search-engine-11.png'
   },
        {
           name: "Gaming&Accessories",
           cateImg: 'https://cdn-icons-png.flaticon.com/512/1068/1068727.png'
   },
        {
           name: "Mobile & Accessory",
           cateImg: 'https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_1280.png'
   },
        {
           name: "Speaker and HeadPhone",
           cateImg: 'https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/System%20and%20Internet/Speaker%20and%20Sound.png'
   },
        {
           name: "Bluetooth Headphones",
           cateImg: 'https://cdn0.iconfinder.com/data/icons/30-hardware-line-icons/64/Headphone-512.png'
   },
        {
           name: "LED TVs & More",
           cateImg: 'https://cdn-icons-png.flaticon.com/512/31/31106.png'
   },
]
  return (
    <>
     <div className='category'>
        {
            data.map((value,index) => {
                return (
                    <div className='box f-flex' key={index}>
                        <img src={value.cateImg} alt='...'/>
                        <span>{value.name}</span>

                    </div>
                    )
            })
        }
     </div>
    </>
  )
}

export default Categories
