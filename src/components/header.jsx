import React from "react"
import logo from '../img/logo.svg';
import phoneIcon from '../img/phone.svg';
import mailIcon from '../img/mail.svg';

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
              <div className="contact">+7(960)500-38-39</div>
            </div>
            <div className="nav">
              <img style={{ width: '30px', height: '30px' }} src={mailIcon} alt="mail" />&nbsp;
              <div className="contact">motran@internet.ru</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Header;