import React from 'react'
import Buttons from './Buttons'

const list = ["All",
    "Music",
    "Mixes",
    "Tamil Cinema",
    "Gaming",
    "News",
    "Grand Prix Motorcycle Race",
    "Cricker",
    "Live",
    "Tourism",
    "Computer Programming",
    "Motorcycles",
    "Sports Cars",
    "History",
    "Aircrafts",
]
const ButtonContainer = () => {
    return (
        <div className='flex sticky top-16 z-0 bg-white'>

            {
                list.map((item, i) => {
                    return <Buttons key={i} item={item} />
                })
            }
        </div>

    )
}

export default ButtonContainer