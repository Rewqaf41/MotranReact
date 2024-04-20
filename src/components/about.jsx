import React from "react"

import about from '../img/about.svg'
import verified from '../img/verified.svg'

import partnerTitle from '../img/Partners-rectangle.png'
import partners from '../img/Partners.png'
import about1 from '../img/about1.png'
import about2 from '../img/about2.png'
import fasie from '../img/fasie.png'
import patent from '../img/patent.png'
import sk from '../img/skolkovo.png'


export const AboutCompany = () => {
    return (
        <div>
            <img className='about' src={about} alt='about'/>
            <div className='cont'>
                <div className='first-about'>
                {/* First about */}
                    <div className='text-about1'>
                        <span className='text-bold'>Научно-производственное<br /> объединение ООО "МОТРАН"</span><br /> - компания, образованная группой инженеров <br />с многолетним опытом работы в области проектирования<br /> и изготовления строительно-дорожных машин.<br/><br/> Проект реализуется при поддержке Фонда<br /> содействия развитию малых форм<br /> предприятий в научно-технической сфере. 
                     </div>
                    <img className='about1' src={about1} alt='about1'/><br/>
                </div> 
                <div className="second-about">
                {/* Second about */}
                    <img className='about2' src={about2} alt='about2'/>
                    <div className='text-about2'>
                    Компания успешно работает с крупнейшими<br /> предприятиями России. Выпускаемая продукция имеет<br /> полный комплект документов, подтверждающих качество и надежность, проходит полный цикл испытаний и контроль качества.<br /><br />
                    Благодаря многолетнему опыту и успешной реализации сложных инженерно-технических задач, мы гарантируем<br /> своим заказчикам высокое качество производимой<br /> продукции и своевременное исполнение взятых на себя<br /> обязательств.
                    </div>
                </div>
            </div>
            <img src={partnerTitle} alt="partnerTitle"  className='mt-5 partner'/>
            <img src={partners} alt="" className="partners"/>
        </div>
    );
}

export const AboutSkolkovo = () => {
    return (
        <div>
            <div className='nav mt-5'>
                <dir className='skolkovo-text3'>
                    В рамках проекта финансируемого Фондом содействия<br /> инновациям нашей командой инженеров была создана<br /> инновационная планетарная лебедка ЛПК-40.26.100 с<br /> применением собственной технологии нарезки барабана<br /> типа "Лебус" для использования в составе автокранов.
                </dir>
            <img className='fasie'  src={fasie} alt="Fasie logo" />
            </div>
            <div className='nav mt-4'>
                <img className='sk' src={sk} alt="" />
                <div className='skolkovo-text1'>
                С июня 2023 года ООО "Мотран" стал участником<br /> инновационного центра "Сколково" в кластере Промтех. <br /><br />
                <div className='nav'>
                    <img style={{ width: '40px', height: '40px' }} src={verified} alt="verified"/>
                    <div className='skolkovo-text2'>
                        Факт резидентства в "Сколково" в очередной раз<br /> подтверждает высокий уровень компетентности,<br /> знаний и эффективности нашей команды.
                    </div>
                </div>
                </div>
            </div>
            <div className='nav'>
                <div className='skolkovo-text4 mt-5'>
                Наша организация получила патент на собственную технологию<br /> изготовления реборды барабана для многослойной навивки<br /> грузового каната. Инновационная разработка позволяет снизить<br /> вероятность неправильной намотки стального троса, повысить срок<br /> службы и предотвратить аварийные ситуации.
                </div>
                <img className='patent' src={patent} alt="" />
            </div>
        </div>
    );
}
