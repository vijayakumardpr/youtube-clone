import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../utils/navSlice'
import { YOUTUBE_SUGGESTIONS } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {

    const [searchTxt, setSearchTxt] = useState("")
    const [suggestionsData, setSuggestionsData] = useState([])
    const [isTrue, setIsTrue] = useState(false)
    const searchQuery = useSelector(store => store.search)
    const dispatch = useDispatch()

    function handleNav() {
        dispatch(toggle())
    }

    //console.log("LRU", searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery[searchTxt]) {
                setSuggestionsData(searchQuery[searchTxt])
            } else {
                getSuggestion()
            }
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [searchTxt])


    async function getSuggestion() {
        //console.log("API Call " + searchTxt)
        const response = await fetch(YOUTUBE_SUGGESTIONS + searchTxt)
        const data = await response.json()
        setSuggestionsData(data[1])
        dispatch(cacheResults({
            [searchTxt]: data[1]
        }))
    }

    ///if (suggestionsData.length > 1) return null

    return (
        <div className='flex items-center justify-between px-5 sticky top-0 z-10 bg-white'>
            <div className='flex items-center'>
                <img onClick={() => handleNav()} className="w-7 cursor-pointer" alt="menu" src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" />
                <img className="w-36 ml-3 cursor-pointer" alt="logo" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" />
            </div>
            <div className='w-1/2'>
                <input
                    className="border border-gray-500 w-2/4 py-2 px-4 outline-none rounded-l-full"
                    type="search"
                    placeholder="Search"
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                    onFocus={() => setIsTrue(true)}
                    onBlur={() => setIsTrue(false)}

                />
                <button className="border border-gray-500 py-2 px-4 rounded-r-full bg-gray-100">Search</button>
                {
                    (suggestionsData.length > 1 && isTrue) && <div className='w-[29rem] m-1 p-3 rounded-md bg-white border border-gray-100 shadow fixed top-13'>
                        {
                            suggestionsData.map((suggestion, i) => <div key={i} className='hover:bg-gray-100 p-2 mb-1'>{suggestion}</div>)
                        }
                    </div>
                }

            </div>
            <div>
                <img className="w-10" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header