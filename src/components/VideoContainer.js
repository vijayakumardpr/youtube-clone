import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'


const VideoContainer = () => {
    const [videos, setVideos] = useState([])


    useEffect(() => {
        getVideos()

    }, [])


    async function getVideos() {
        const videoStreaming = await fetch(YOUTUBE_VIDEOS_API)
        const data = await videoStreaming.json()
        // console.log(data.items);
        setVideos(data.items)
    }

    // async function getSuggestion() {
    //     const videoStreaming = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&q=cricketregionCode=IN&key=AIzaSyD0rQ9lSfoMNAIZDhCgx7nSr3GcaLZqAPE")
    //     const data = await videoStreaming.json()
    //     console.log("suggestions", data);

    // }


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