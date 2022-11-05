import React from 'react'
import Announce from '../Announcement/Announce'
import Discount from '../Discount/Discount'
import FlashDeals from '../Flashdeals/FlashDeals'
import Home from '../mainpages/Home'
import Newarrivals from '../newarrivals/Newarrivals'
import Shop from '../Shop/Shop'
import Topcate from '../Top/Topcate'

const Pages = ({productItem,addtocart,shopItems}) => {
  return (
    <div>
      <Home/>
      <FlashDeals productItem={productItem} addtocart={addtocart}/>
      <Topcate/>
      <Newarrivals/>
      <Announce/>
      <Discount/>
      <Shop shopItems={shopItems} addtocart={addtocart}/>
    </div>
  )
}

export default Pages
