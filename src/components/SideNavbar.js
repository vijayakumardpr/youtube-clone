import React from 'react'

const sideNavbar = () => {
    return (
        <div className='mx-6 '>
            <ul className='py-3'>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul className='py-3'>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            <div className='font-semibold'>Subscriptions</div>
            <ul className='py-3'>
                <li>WION</li>
                <li>Ungal Anban Hema...</li>
                <li>Backpacker Kumar</li>
                <li>Covai Express</li>
                <li>Big Bang Bogan</li>
                <li>Web Dev Simplifi...</li>
                <li>PAYITRU</li>
            </ul>
            <div className='font-semibold'>Explore</div>
            <ul className='py-3'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Fashion & Beauty</li>
            </ul>
            <div className='font-semibold'>More from YouTube</div>
            <ul className='py-3'>
                <li>YouTube Premium</li>
                <li>YouTube Studio</li>
                <li>YouTube Music</li>
                <li>YouTube Kids</li>
            </ul>
        </div>
    )
}

export default sideNavbar