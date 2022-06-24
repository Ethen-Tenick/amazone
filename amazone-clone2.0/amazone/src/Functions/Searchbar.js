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
    const [eachDataName, setEachDataName] = useState([])

    const startSearch = () => {

        // length
        // starting character
        // going foward in character matching

        const turnedArray = inputData.split('') //split string input into array

        const allNames = () => {
            dataBase.map((item) => {
                setSearchResult(item.name)   // put the names of all items in the setResultNames variable
            })
        }

        searchResult.map((item) => {
            const eachDataName = item.split('')             //split each item in the searchResult to make each one an array of letters
            for (var i = 0; i < turnedArray.length; i++) {
                if (eachDataName.length == turnedArray.length) {      // take each item and compare its first character with the first character of the input
                    if (eachDataName[0] == turnedArray[0]) {
                        if (eachDataName[1] == turnedArray[1]) {
                            if (eachDataName[-1] == turnedArray[-1]) {
                                console.log(eachDataName + ' was found')
                            } else {
                                console.log('item not found')
                            }
                        } else {
                            console.log(eachDataName + 'the second character different')
                        }

                    } else {
                        console.log(eachDataName + ' first character different')
                    }

                } else {
                    console.log(eachDataName + '  is not of same length')
                }
            }
        })
    }


    return (
        <div className='search_main_container'>
            <div className='input_area'>
                <button>Search</button>
                <input type='text' onChange={e => { setInputData(e.target.value); startSearch() }} />
            </div>
            <div className='results'>
                {
                    dataBase.map(item => {
                        return <h5 key={item.name}>{item.name}</h5>
                    })
                }
            </div>
        </div>
    )
}

export default Searchbar