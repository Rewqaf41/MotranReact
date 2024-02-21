import React from "react";

import about from '../img/about.svg';
import verified from '../img/verified.svg'

import about1 from '../img/about1.png';
import about2 from '../img/about2.png';
import partners from '../img/Partners.png';
import sk from '../img/skolkovo.png'

export const AboutCompany = () => {
    return (
        <div>
            <img className='about' src={about} alt='about'/>
            <div className='cont'>
                <div className='first-about'>
                {/* First about */}
                    <div className='text-about1'>
                        <span className='text-bold'>Научно-производственное<br /> объединение ООО "МОТРАН"</span><br /> - компания, образованная группой<br /> инженеров с многолетним опытом работы в<br /> области проектирования и изготовления<br /> строительно-дорожных машин.<br/><br/> Проект реализуется при поддержке фонда<br /> содействия развитию малых форм<br /> предприятий в научно-технической сфере. 
                     </div>
                    <img className='about1' src={about1} alt='about1'/><br/>
                </div> 
                <div className="second-about">
                {/* Second about */}
                    <img className='about2' src={about2} alt='about2'/>
                    <div className='text-about2'>
                    Компания успешно работает с крупнейшими предприятиями России.<br/> Выпускаемая продукция имеет полный комплект документов,<br /> подтверждающих качество и надежность, проходит полный цикл<br /> испытаний и контроль качества.<br /><br />
                    Благодаря многолетнему опыту и успешной реализации<br /> сложных инженерно-технических задач, мы гарантируем<br /> своим заказчикам высокое качество производимой продукции и своевременное исполнение взятых на себя обязательств.
                    </div>
                </div>
            </div>
            <img src={partners} alt="partners"  className='mt-5 partners'/>
        </div>
    );
}

export const AboutSkolkovo = () => {
    return (
        <div>
            <div className='nav mt-5'>
                <img className='sk' src={sk} alt="" />
                <div className='skolkovo-text1'>
                С июня 2023 года ООО "Мотран" стал участником<br /> инновационного центра "Сколково" в кластере Промтех. <br /><br />
                <div className='nav'>
                    <img style={{ width: '40px', height: '40px' }} src={verified} alt="verified"/>
                    <div className='skolkovo-text2'>
                        Факт резидентства в "Сколково" в очередной раз<br /> подтверждает высокий уровень качества,<br /> технологичности, надёжности и эффективности<br /> нашего оборудования.
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
