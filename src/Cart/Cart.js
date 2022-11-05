import React from 'react'
import './Cart.css'

const Cart = ({ cartItem, addtocart, decreseQty }) => {
    const totalprice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className='cart-items'>
                <div className='container d-flex'>
                    <div className='cart-details'>
                        {cartItem.length === 0 && <h1 className='no-item product'>No items added</h1>}
                        {
                            cartItem.map((item) => {
                                const productTotal = item.price * item.qty;
                                return (
                                    <div className='cart-list product d-flex'>
                                        <div className='img'>
                                            <img src={item.cover} alt="" style={{ width: '100px', height: "100px" }} />
                                        </div>
                                        <div className='cart-detail'>
                                            <h3>
                                                {item.name}
                                            </h3>
                                            <h4>
                                                {item.price}.00 {item.qty}
                                                <span>${productTotal}.00</span>
                                            </h4>

                                        </div>
                                        <div className='cart-items-function'>
                                            <div className='removeCart'>
                                                <button className='removeCart'>
                                                    <i className='fa solid fa-xmark'></i>
                                                </button>

                                            </div>
                                            <div className='cartControl d-flex'>
                                                <button className='incCart' onClick={() => addtocart(item)}>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                                <button className='descCart' onClick={() => decreseQty(item)}>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='cart-total product'>
                        <h2 >Cart Summary</h2>
                        <div className='d-flex'>
                            <h4 >Total:</h4>
                            <h3 >${totalprice}.00</h3>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Cart

