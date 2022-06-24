import React, { useState } from 'react'
import './Cart.css'
import { v4 } from 'uuid'

function Cart() {
    const [dataBase, setDataBase] = useState([])
    const [condition, setCondition] = useState(false)


    return (
        <div className='cart_main_container'>
            <div>
                <button onClick={() => { dataBase.pop() }}>delete from cart</button>
                <button onClick={() => { setDataBase(prev => [...prev, 455]) }}>Add to cart</button>
                <button onClick={() => { setCondition(true) }}>View cart {dataBase.length}</button>
            </div>
            {
                (condition) ? dataBase.map(item => { return <h4 key={v4()}>{item}</h4> }) : null
            }

        </div>
    )
}

export default Cart