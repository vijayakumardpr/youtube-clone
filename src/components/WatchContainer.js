import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { navHide } from '../utils/navSlice'
import CommentsContainer from './CommentsContainer'
import ChatContainer from './ChatContainer'

const WatchContainer = () => {
    const [isShow, setIsShow] = useState(true)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(navHide())
    })

    return (
        <div className="flex w-full mx-14">
            <div className='mt-5'>
                <iframe width="1280"
                    height="600"
                    src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <div>
                    <div className='my-5 font-bold text-2xl'>Comments</div>
                    <CommentsContainer />
                </div>
            </div>
            <div className='flex flex-col mt-5 ml-5 w-full'>
                {isShow && <div className=' border border-gray-400 h-[560px] rounded-xl overflow-y-scroll flex flex-col-reverse'><ChatContainer /></div>}
                <button className="py-2 border border-gray-500 rounded-xl " onClick={() => setIsShow(!isShow)}>{isShow ? "Hide Chat" : "Show Chat "}</button>
            </div>
        </div>
    )
}

export default WatchContainer