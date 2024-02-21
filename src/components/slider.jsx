import React from "react";

import rectangle from '../img/rectangle.png';
import mainpagephoto from '../img/main-page.png';
import mainpagephoto2 from '../img/main-page2.png';

const Slider = () => {
    return (
        <div className='slider'>
          <div className='slider__item'>
            <div className='bg1'>
              <div style={{position: 'relative'}}>
              <img style={{height: '100px', width: '100%'}} src={rectangle} alt='rectangle' />
                <div className='title'>
                  Российский производитель <span className='text'>планетарных грузоподъемных лебедок, механизмов поворота и бортовых редукторов для строительно-дорожных машин</span> с использованием современныхтехнологий и собственных разработок.
                </div>
              </div>
              <img className='mainpagephoto' src={mainpagephoto} alt='mainpagephoto' />
            </div>
          </div>

          <div className='slider__item'>
            <div className='bg2'>
              <div style={{position: 'relative'}}>
                <img className='mainpagephoto2' src={mainpagephoto2} alt='mainpagephoto2'/>
                <div>
                  <img style={{width: '100%'}} src={rectangle} alt='rectangle'/>
                  <div className='title2'>Производим планетарные грузоподъемные лебедки с собственной технологией <span className='text'>нарезки<br/> барабана типа "Лебус"</span> с запатентованной конструкцией сбрасывателей на реборде<br/> и <span className='text'>специальным канатоукладчиком грузового каната.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Slider;