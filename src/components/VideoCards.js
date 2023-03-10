import React from 'react'


const VideoCards = ({ id, snippet, statistics }) => {

    const { title, thumbnails, channelTitle } = snippet
    const { viewCount } = statistics



    // function getNumber(num) {

    //     var units = ["Million", "Billion", "T", "Q"]
    //     var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    //     var r = unit % 3
    //     var x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(2)
    //     return x.toFixed(2) + ' ' + units[Math.floor(unit / 3) - 2]
    // }


    return (
        <div className='p-2 w-72 m-3'>
            <img className="rounded-xl" alt="video" src={thumbnails.medium.url} />
            <div>
                <div className="font-bold mt-1">{title}</div>
                <div className='text-[15px] text-gray-900 mt-1'>{channelTitle}</div>
                <div className='text-sm text-gray-900'>{viewCount} views</div>
            </div>
        </div>
    )
}

export default VideoCards