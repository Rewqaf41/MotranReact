import React from "react";

import phoneIcon from '../img/phone.svg';
import mailIcon from '../img/mail.svg';
import pin from '../img/pin.svg';
import tg from '../img/tg.svg'
import com from '../img/com.svg'

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
                  <div style={{color: '#ffffff'}} className="contact">+7(960)500-38-39</div>
                </div>
              <div className="nav">
                <img style={{ width: '30px', height: '30px' }} src={mailIcon} alt="mail" />&nbsp;
                <div style={{color: '#ffffff'}} className="contact">motran@internet.ru</div>
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