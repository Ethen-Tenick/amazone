import React from 'react'
import CartItem from '../Components/CartItem'

function Cart() {
    return (
        <div className='cart_main_container'>
            <div className='items_container'>
                <div className='topic_header'>
                    <div className='category_name'>
                        Shopping Cart
                    </div>
                    <div className='price_title'>
                        Price
                    </div>
                </div>
                <CartItem />
            </div>
        </div>
    )
}

export default Cart