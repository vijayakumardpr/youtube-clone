import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    const searchTxt = useSelector(store => store.search.text)

    console.log(searchTxt);

    useEffect(() => {
        getVideos()
    }, [])


    async function getVideos() {
        const videoStreaming = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCgVXnKeqyJW0vor4n01N1dhFXgR0v3ecw")
        const data = await videoStreaming.json()
        setVideos(data.items)
    }



    return (
        <div className='flex flex-wrap justify-center'>
            {
                videos.map((video, i) => {
                    return (
                        <Link key={i} to={"/watch?v=" + video.id}>
                            <VideoCards  {...video} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default VideoContainer