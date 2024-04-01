import React, { useState } from "react"
import Modal from "./modal.jsx"

import mrp from '../img/mrp.png'
import leb1 from '../img/лмп.png'
import leb2 from '../img/лпк.png'
import mpk from '../img/мпк.png'



const ProductCard = ({image, text, needtomove, i}) => {
    const [modalActive, setModalActive] = useState(false);

    const handleClick = () => {
        setModalActive(!modalActive)
    }
    return (
        <div>
            <div className='cart'>
                    <img className={needtomove ? 'mt-3': ''} src={image} alt=""/>
                    <div className={needtomove ? 'cart-text  mt-4': 'cart-text'}>
                        {text}
                    </div>
                <button href="#" className={needtomove ? 'btn btn-warning btns mt-3': 'btn btn-warning btns'} onClick={handleClick}>Узнать подробнее</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {i === 'mrp' ? <>
                                <img className='img' src={mrp} alt="Мотор-редуктор планетарный (МРП)"/>
                                <div>Если остались какие-либо вопросы, звоните:</div>
                                <a href="tel:+79605003839">+7(960)500-38-39</a>
                              </> : null}
                {i === 'leb1' ? <>
                                <img className='img' src={leb1} alt="Планетарные грузоподъемные лебедки ЛПМ-6.26.100" />
                                <div>Если остались какие-либо вопросы, звоните:</div>
                                <a href="tel:+79605003839">+7(960)500-38-39</a>
                              </>: null}
                {i === 'mpk' ? <>
                                <img className='img' src={mpk} alt="Планетарные механизмы поворота (МПК)" />
                                <div>Если остались какие-либо вопросы, звоните:</div>
                                <a href="tel:+79605003839">+7(960)500-38-39</a>
                              </>: null}
                {i === 'leb2' ? <>
                                <img className='img' src={leb2} alt="Планетарные грузоподъемные лебедки ЛПК-40.26.100" />
                                <div>Если остались какие-либо вопросы, звоните:</div>
                                <a href="tel:+79605003839">+7(960)500-38-39</a>
                              </>: null}
                {i === 'reductor' ? <>
                                    <div>Звоните мы ответим на все ваши вопросы:</div>
                                    <a href="tel:+79605003839">+7(960)500-38-39</a>
                                   </>: null}
            </Modal>
        </div>
    
    );
}

export default ProductCard;