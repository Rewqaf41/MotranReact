import React from "react";
import { Slider__item } from "./slider__item";

import card1 from '../img/Card1.png';
import card2 from '../img/Card2.png';
import card3 from '../img/Card3.png';
import card4 from '../img/Card4.png';
import card5 from '../img/Card5.png';

const Production = () => {
    return (
        <div className=" mt-5 bg3">
            <div className="slidercard">
                <Slider__item card={card1}/>
                <Slider__item card={card2}/>
                <Slider__item card={card3}/>
                <Slider__item card={card4}/>
                <Slider__item card={card5}/>
            </div>
        </div>
    )
}

export default Production;