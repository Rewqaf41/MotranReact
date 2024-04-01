import React from "react"

import mailIcon from '../img/mail.svg'
import phoneIcon from '../img/phone.svg'
import pin from '../img/pin.svg'

const Footer = () => {
    return (
        <div className='bg4 mt-5' >
          <div className='footer1'>
            Сделано в России
          </div>
            <div className='mt-4' id="container">
              <div style={{color: '#ffffff'}} id="block1">
              <img src={pin} alt="pin" />
                Адрес: Ивановская обл., г. Тейково,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ул.Парижской Коммуны, д.26
              </div>
              <div id="block2">
                <div className="nav">
                  <img style={{ width: '30px', height: '30px' }} src={phoneIcon} alt="phone" />&nbsp;
                  <a href='tel:+79605003839' className="contact anim">+7(960)500-38-39</a>
                </div>
              <div className="nav">
                <img style={{ width: '30px', height: '30px' }} src={mailIcon} alt="mail" />&nbsp;
                <a href='mailto:motran@internet.ru' className="contact anim">motran@internet.ru</a>
              </div>
            </div>
          </div>
          <div className='footer2 mt-4'>
            ИНН/КПП 3702270275/370201001<br/>ОГРН 1223700006232
          </div>
        </div>
    );
}

export default Footer