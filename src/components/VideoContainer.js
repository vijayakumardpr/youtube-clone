import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    async function getVideos() {
        const videoStreaming = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyD0rQ9lSfoMNAIZDhCgx7nSr3GcaLZqAPE")
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