import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Pages from './Pages/Pages';

import { useState } from 'react';
import Data from './Flashdeals/Data'
import Cart from './Cart/Cart';
import Sdata from './Shop/ShopData';
import Footer from './Footer/Footer';

function App() {

  
  const { productItem} = Data
  const { shopItems} = Sdata
  const[cartItem,setCartItem] = useState([]);

  const addtocart = (product) => {
   
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
     
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
  
  const  decreseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <div>

    <Router>
    <Header cartItem = {cartItem}/>
      <Switch>
        <Route path='/' exact>
          <Pages productItem={productItem} addtocart={addtocart} shopItems={shopItems}/>
        </Route> 
        <Route path='/Cart' exact>
          <Cart cartItem = {cartItem} addtocart={addtocart} decreseQty={decreseQty}/>
        </Route> 
      </Switch>
      <Footer/>
    </Router>
    </div>
    );
}

export default App;
