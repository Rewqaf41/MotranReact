import React from "react"

import production from '../img/Production.png'
import { SliderItem } from "./sliderItem.jsx"

import card1 from '../img/Card1.png'
import card2 from '../img/Card2.png'
import card3 from '../img/Card3.png'
import card4 from '../img/Card4.png'
import card5 from '../img/Card5.png'

const Production = () => {
    return (
        <div className="mt-3 bg3 position-relative">
            <div className="d-flex justify-content-end position-absolute end-0 top-0">
                <img className="production" src={production} alt="Production" />
            </div>
            <div className='slidercard'>
                <SliderItem card={card1}/>
                <SliderItem card={card2}/>
                <SliderItem card={card3}/>
                <SliderItem card={card4}/>
                <SliderItem card={card5}/>
            </div>
        </div>
    )
}

export default Production;