import React from 'react'
import { useSearchParams } from 'react-router-dom'
const WatchContainer = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'));
    return (
        <div className='ml-14 mt-5'>
            <iframe width="1280"
                height="600"
                src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchContainer