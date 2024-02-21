import React, {useState} from "react";
import Modal from "./modal.jsx";


const ProductCard = ({image, text, needtomove}) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <div className='cart'>
                    <img className={needtomove ? 'mt-3': ''} src={image} alt=""/>
                    <div className={needtomove ? 'cart-text  mt-4': 'cart-text'}>
                        {text}
                    </div>
                <button href="#" className={needtomove ? 'btn btn-warning btns mt-3': 'btn btn-warning btns'} onClick={() => setModalActive(!modalActive)}>Узнать подробнее</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="about-text fs-5">
                    Звоните, мы ответим на все ваши вопросы!
                </div>
                <a href="tel:+79605003839" className="contact phone">
                    +7(960)500-38-39
                </a>
            </Modal>
        </div>
    
    );
}

export default ProductCard;