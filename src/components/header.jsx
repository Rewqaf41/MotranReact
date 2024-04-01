import React from "react"
import logo from '../img/logo.svg'
import mailIcon from '../img/mail.svg'
import phoneIcon from '../img/phone.svg'

const Header = () => {
    return(
    <header className="p-2 text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          </ul>
          <div className="text-end">
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
      </div>
    </header>
    )
}

export default Header;