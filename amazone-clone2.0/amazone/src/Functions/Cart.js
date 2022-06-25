import React, { useState } from 'react'
import './Cart.css'
import { v4 } from 'uuid'

function Cart() {
    const [condition, setCondition] = useState(false)
    const [dataBaseCondition, setDataBaseCondition] = useState(false)

    const [totalPrice, setTotalPrice] = useState([])
    const [price, setPrice] = useState([])

    const [itemName, setItemName] = useState([])
    const [itemId, setItemId] = useState([])
    const [itemPrice, setItemPrice] = useState([])

    const [getData, setGetData] = useState([
        {
            itemName: 'Tablet',
            itemId: 'first class',
            itemPrice: 90000
        },
        {
            itemName: 'PC',
            itemId: 'second class',
            itemPrice: 120000
        },
        {
            itemName: 'TV set',
            itemId: 'first class',
            itemPrice: 1
        },
        {
            itemName: 'Bugatti',
            itemId: 'Third class',
            itemPrice: 65000000
        }
    ])

    const getCart = () => {
        getData.map(item => {
            setPrice((prev) => [...prev, item.itemPrice])
        })
    }
    const aggregatePrices = () => {
        for (var i = 0; i < setPrice.length; i++) {
            setTotalPrice(price[i] + price[i + 1])
        }
    }
    const cartMainContainer = () => {
        getCart()
        aggregatePrices()
        setCondition(false)
        setDataBaseCondition(true)
    }
    const addToCart = () => {
        setGetData(prev => [...prev, { itemName, itemId, itemPrice }])
    }


    return (
        <div className='cart_main_container'>
            <div>
                <div>
                    <input placeholder='Mouse' onChange={e => { setItemName(e.target.value) }} />
                    <input placeholder='Computing' onChange={e => { setItemId(e.target.value) }} />
                    <input placeholder='65000' onChange={e => { setItemPrice(e.target.value) }} />
                </div>
                <div>
                    <button onClick={() => { getData.pop() }}>delete from cart</button>
                    <button onClick={() => { cartMainContainer() }}>Total Cart Price</button>
                    <button onClick={() => { addToCart() }}>Add to cart</button>
                    <button onClick={() => { setCondition(!condition); setDataBaseCondition(false) }}>View cart {getData.length}</button>
                </div>
                <div>
                    {
                        (condition) ? getData.map(item => {
                            return <div>
                                <h4 key={item.itemName + v4()}>{item.itemName}</h4>
                                <h4 key={item.itemId + v4()}>{item.itemId}</h4>
                                <h4 key={item.itemPrice + v4()}>{item.itemPrice}</h4>
                            </div>
                        }) : null
                    }
                    {
                        (dataBaseCondition) ? <h3 key={totalPrice + v4()}>{totalPrice}</h3> : "null"
                    }
                </div>
            </div>



        </div>
    )
}

export default Cart