import React from 'react'


const LiveMessages = ({ name, message }) => {


    return (
        <div className="flex items-center shadow p-2">
            <img alt="message" className="w-8" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <div className="mx-3 font-bold">{name}</div>
            <div>{message}</div>
        </div>
    )
}

export default LiveMessages