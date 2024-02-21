import React from "react";
import '../css/modal.css'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modale active" : "modale"} onClick={() => setActive(!active)}>
      <div className={active ? "modale__content active" : "modale__content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;