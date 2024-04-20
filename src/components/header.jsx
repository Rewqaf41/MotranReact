import logo from '../img/logo.svg'
import mailIcon from '../img/mail.svg'
import phoneIcon from '../img/phone.svg'

const Header = () => {
    return(
    // <header className="p-2 text-white">
    //   <div className="container">
    //         <img className="logo1" src={logo1} alt="logo" />
    //     <div className="d-flex flex-wrap align-items-center justify-content-center">
    //       <a href="/" className="text-white text-decoration-none">
    //         <img className="logo2" src={logo2} alt="logo" />
    //       </a>
    //       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    //       </ul>
    //       <div className="text-end">
    //         <div className="nav">
    //           <img style={{ width: '30px', height: '30px' }} src={phoneIcon} alt="phone" />&nbsp;
    //           <a href='tel:+79605003839' className="contact anim">+7(960)500-38-39</a>
    //         </div>
    //         <div className="nav">
    //           <img style={{ width: '30px', height: '30px' }} src={mailIcon} alt="mail" />&nbsp;
    //           <a href='mailto:motran@internet.ru' className="contact anim">motran@internet.ru</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="p-2 text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="Logo" />
          </a>
        </div>
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
    </header>
    )
}

export default Header;