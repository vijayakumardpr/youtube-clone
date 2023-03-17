import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessages } from '../utils/liveSlice'
import LiveMessages from './LiveMessages'
import { useSelector } from 'react-redux'
import { generateName } from '../utils/helper'

const ChatContainer = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const messages = useSelector(store => store.chat.messages)

    //console.log("messages", messages);
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateName(),
                message: "lorem ipsum dolor sit amet, consectetur adip"
            }))
        }, 3000)

        return () => {
            console.log("unmount");
            clearInterval(timer)
        }
    }, [])

    function liveTxt() {
        dispatch(addMessages({
            name: generateName(),
            message: message
        }))
        setMessage("")
    }
    return (
        <div className='m-5'>
            {
                messages.map((message, i) => <LiveMessages key={i} {...message} />)
            }
            <input maxLength="10" className="my-2 p-1 px-3 border border-gray-300 rounded-lg w-full outline-none" type="text" value={message} placeholder="say something..." onChange={(e) => setMessage(e.target.value)} />
            <div>{message.length}/10</div>
            <button className='w-full text-right' onClick={() => liveTxt()}>Sent</button>
        </div>
    )
}

export default ChatContainer