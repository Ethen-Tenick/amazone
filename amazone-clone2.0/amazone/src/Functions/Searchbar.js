import React, { useState } from 'react'
import './Search.css'

function Searchbar() {

    const [inputData, setInputData] = useState([])
    const [dataBase, setDataBase] = useState([
        {
            name: 'spinach',
            category: 'vegetables'
        },
        {
            name: 'wine',
            category: 'beverage'
        },
        {
            name: 'iphone',
            category: 'gadgets'
        },
        {
            name: 'jeans',
            category: 'clothes'
        },
        {
            name: 'apples',
            category: 'vegetables'
        },
        {
            name: 'fruit juice',
            category: 'beverage'
        },
        {
            name: 'Legion PC',
            category: 'gadgets'
        },
        {
            name: 'nike',
            category: 'clothes'
        }
    ])
    const [searchResult, setSearchResult] = useState([])

    return (
        <div className='search_main_container'>
            <div className='input_area'>
                <button>Search</button>
                <input type='text' onChange={e => { setInputData(e.target.value) }} />
            </div>
            <div className='results'>
                {
                    dataBase.map(item => {
                        return <h5>{item.name}</h5>
                    })
                }
            </div>
        </div>
    )
}

export default Searchbar