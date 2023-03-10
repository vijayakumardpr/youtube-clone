import React from 'react'
import { useSelector } from 'react-redux'


const SideNavbar = () => {

    const isTrue = useSelector(store => store.nav.isTrue)

    if (!isTrue) return null


    return (
        <div className='mx-6'>
            <ul className='py-3 w-48' >
                <li className="m-1">Home</li>
                <li className="m-1">Shorts</li>
                <li className="m-1">Subscriptions</li>
            </ul >
            <ul className='py-3'>
                <li className="m-1">Library</li>
                <li className="m-1">History</li>
                <li className="m-1">Your Videos</li>
                <li className="m-1">Watch Later</li>
                <li className="m-1">Liked Videos</li>
            </ul>
            <div className='font-semibold'>Subscriptions</div>
            <ul className='py-3'>
                <li className="m-1">WION</li>
                <li className="m-1" >Ungal Anban Hema...</li>
                <li className="m-1">Backpacker Kumar</li>
                <li className="m-1">Covai Express</li>
                <li className="m-1">Big Bang Bogan</li>
                <li className="m-1">Web Dev Simplifi...</li>
                <li className="m-1">PAYITRU</li>
            </ul>
            <div className='font-semibold'>Explore</div>
            <ul className='py-3'>
                <li className="m-1">Trending</li>
                <li className="m-1">Shopping</li>
                <li className="m-1">Music</li>
                <li className="m-1">Movies</li>
                <li className="m-1">Live</li>
                <li className="m-1">Gaming</li>
                <li className="m-1">News</li>
                <li className="m-1">Sports</li>
                <li className="m-1">Learning</li>
                <li className="m-1">Fashion & Beauty</li>
            </ul>
            <div className='font-semibold'>More from YouTube</div>
            <ul className='py-3'>
                <li className="m-1">YouTube Premium</li>
                <li className="m-1">YouTube Studio</li>
                <li className="m-1">YouTube Music</li>
                <li className="m-1">YouTube Kids</li>
            </ul>
        </div >
    )
}

export default SideNavbar