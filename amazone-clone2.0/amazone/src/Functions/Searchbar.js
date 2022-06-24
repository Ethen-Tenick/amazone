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
    const [searchList, setSearchList] = useState([])

    const startSearch = () => {
        // length
        // starting character
        // going foward in character matching

        const turnedArray = inputData.split('') //split string input into array
        const allNames = () => {
            dataBase.map((item) => {
                setSearchResult((prev) => [...prev, item.name])   // put the names of all items in the setResultNames variable
            })
        }
        allNames()

        searchResult.map((item) => {
            const eachDataName = item.split('')             //split each item in the searchResult to make each one an array of letters
            for (var i = 0; i < turnedArray.length; i++) {
                if (eachDataName.length == turnedArray.length) {
                    setSearchList(eachDataName)      // take each item and compare its first character with the first character of the input
                    if (eachDataName[0] == turnedArray[0]) {
                        setSearchList(eachDataName)
                        if (eachDataName[1] == turnedArray[1]) {
                            setSearchList(eachDataName)
                            if (eachDataName[-1] == turnedArray[-1]) {
                                setSearchList(eachDataName)
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
        console.log('CONTINUE TO TYPE THEN THE FINALL RESULT WILL BE')
    }
    const PrototypeStartSearch = () => {


        const turnedArray = inputData.split('') //split string input into array
        const allNames = () => {
            dataBase.map((item) => {
                setSearchResult((prev) => [...prev, item.name])   // put the names of all items in the setResultNames variable
            })
        }
        allNames()


        const searchStepOne = searchResult.filter((item) => {      //filter the length of the result
            const eachDataName = item.split('')
            if (eachDataName.length == turnedArray.length) {
                return eachDataName
            } else {
                console.log('disqualified by length :' + eachDataName)
            }
        })
        const searchStepTwo = searchStepOne.filter((item) => {         // filter first character
            const eachDataName = item.split('')
            if (eachDataName[0] == turnedArray[0]) {
                return eachDataName
            } else {
                console.log('disqualified by first character :' + eachDataName)
            }
        })

        const searchStepThree = searchStepTwo.filter((item) => {         // filter second character
            const eachDataName = item.split('')
            if (eachDataName[1] == turnedArray[1]) {
                return eachDataName
            } else {
                console.log('disqualified by second character :' + eachDataName)
            }
        })
        const searchStepFour = searchStepThree.filter((item) => {         // filter third character
            const eachDataName = item.split('')
            if (eachDataName[2] == turnedArray[2]) {
                return eachDataName
            } else {
                console.log('disqualified by Third character :' + eachDataName)
            }
        })
        const searchStepFive = searchStepFour.filter((item) => {         // filter last character
            const eachDataName = item.split('')
            if (eachDataName[-1] == turnedArray[-1]) {
                return eachDataName
            } else {
                console.log('disqualified by last character :' + eachDataName)
            }
        })
        searchStepFive()
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
            <div className='live_result_test'>
                <h4>This are the Results</h4>
                {
                    searchList.map((item) => {
                        <h6 key={item}>{item}</h6>
                    })
                }
            </div>
        </div>
    )
}

export default Searchbar