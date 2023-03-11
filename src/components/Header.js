import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../utils/navSlice'
import { searchVideos } from '../utils/searchSlice'


const Header = () => {

    const [searchTxt, setSearchTxt] = useState("")

    const dispatch = useDispatch()

    function handleNav() {
        dispatch(toggle())
    }

    function getValue() {
        dispatch(searchVideos(searchTxt))
    }



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
                    onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }}
                />
                <button
                    className="border border-gray-500 py-2 px-4 rounded-r-full bg-gray-100"
                    onClick={() => getValue()}
                >Search</button>
            </div>
            <div>
                <img className="w-10" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header