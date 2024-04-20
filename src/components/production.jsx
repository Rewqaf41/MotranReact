import React from "react"
import Slider from 'react-slick'

import production from '../img/Production.png'

import card1 from '../img/Card1.png'
import card2 from '../img/Card2.png'
import card3 from '../img/Card3.png'
import card4 from '../img/Card4.png'
import card5 from '../img/Card5.png'

// const Production = () => {
//     return (
//         <div className="mt-3 bg3 position-relative">
//             <div className="d-flex justify-content-end position-absolute end-0 top-0">
//                 <img className="production" src={production} alt="Production" />
//             </div>
//             <div className='slidercard'>
//                 <SliderItem card={card1}/>
//                 <SliderItem card={card2}/>
//                 <SliderItem card={card3}/>
//                 <SliderItem card={card4}/>
//                 <SliderItem card={card5}/>
//             </div>
//         </div>
//     )
// }

// export default Production;

export function Production() {
    var settings = {
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2500,
    }
    const getSlidesToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1920) {
            return 4; 
        } else {
            return 3;
        }
    }
    return (
        <div className="mt-3 bg3 position-relative">
            <div className="d-flex justify-content-end position-absolute end-0 top-0">
                <img className="production" src={production} alt="Production" />
            </div>
            <Slider className='slidercard' {...settings} slidesToShow={getSlidesToShow()}>
                <img className='cards' src={card1} alt="mechanical processing" />
                <img className='cards' src={card2} alt="painting" />
                <img className='cards' src={card3} alt="welding" />
                <img className='cards' src={card4} alt="packaging" />
                <img className='cards' src={card5} alt="engineering" />
            </Slider>
        </div>
    )
}