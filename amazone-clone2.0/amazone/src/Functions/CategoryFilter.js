import React, { useState } from 'react'
import { v4 } from 'uuid'

// goals
// filter based category
// switch currency view

function CategoryFilter() {

    const [getData, setGetData] = useState([
        {
            name: 'vegetables',
            category: 'food',
            price: 100
        },
        {
            name: 'PC',
            category: 'computing',
            price: 200
        },
        {
            name: 'TV set',
            category: 'computing',
            price: 300
        },
        {
            name: 'drinks',
            category: 'food',
            price: 600
        }
    ])
    const [items, setItems] = useState([])
    const [conditionfood, setConditionfood] = useState(false)
    const [conditioncomp, setConditioncomp] = useState(false)
    const [changeCondition, setChangeCondition] = useState(false)

    const searchCategory = (category) => {
        getData.map((item) => {
            if (category == item.category) {
                setItems(prev => [...prev, item])
            } else { return }
        })
    }


    return (
        <div>
            {
                (changeCondition) ? getData.map((item) => { item.price = item.price / 100 }) : null
            }

            <button onClick={() => { searchCategory('food'); setConditioncomp(false); setConditionfood(true) }}>Food</button>
            <button onClick={() => { searchCategory('computing'); setConditionfood(false); setConditioncomp(true) }}>Comp</button>
            <button onClick={(() => { setChangeCondition(!changeCondition) })}>change currency</button>
            {
                (conditionfood || conditioncomp) ? items.map((item) => { return <div key={v4()}><h4 key={v4()}>{item.name}</h4><h4 key={v4()}>{item.price}</h4></div> }) : 'choose a category'
            }

        </div>
    )
}

export default CategoryFilter