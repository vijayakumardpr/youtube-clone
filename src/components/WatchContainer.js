import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { navHide } from '../utils/navSlice'

const WatchContainer = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(navHide())
    })

    return (
        <div className='ml-14 mt-5'>
            <iframe width="1280"
                height="600"
                src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?autoplay=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchContainer