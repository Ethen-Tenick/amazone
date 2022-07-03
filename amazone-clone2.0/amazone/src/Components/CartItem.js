import React, { Component } from 'react'
import './CartItem.css'

function CartItem(props) {
    const imgUrl = ''
    const { imgSource, itemPrice, itemTitle, ItemAvailability } = props
    return (
        <div className='cartitem_main_container'>
            <div className='item_image'>
                <img
                    src={imgUrl}
                    alt=''
                />
            </div>

            <div className='itemInfo'>
                <div className='item_name_info'>Hello i am the item</div>
                <div className='item_instock'>In stock</div>
                <div className='is_gift'>
                    <input className='space-me' type='checkbox' />
                    <label className='space-me'>This is a gift</label>
                    <a href='#' className='space-me'>Learn more</a>
                </div>
                <div className='style_item'>style : '27 inch'</div>
                <div className='pattern_name'>Pattern Name : Monitor</div>
                <div className='last_item_div'>
                    <div className='quantity_option'>
                        <select>
                            <option>Qty : 1</option>
                            <option>Qty : 2</option>
                            <option>Qty : 3</option>
                            <option>Qty : 4</option>
                            <option>Qty : 5</option>
                            <option>Qty : 6</option>
                            <option>Qty : 7</option>
                        </select>
                    </div>
                    <div className='delete_item'>Delete</div>
                    <div className='save_item'>Save for later</div>
                    <div className='compare_item'>Compare with similar items</div>

                </div>
            </div>

            <div className='the_current_price'>$ 16.99</div>

        </div>
    )
}

export default CartItem