import React from "react"

export const SliderItem = ({card}) => {
    return (
        <div className='slider__item'>
            <>
            <img className='cards' src={card} alt="card"/>
            </>
        </div>
    )
}
