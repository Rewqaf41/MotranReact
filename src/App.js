import { useEffect } from 'react'
import { AboutCompany, AboutSkolkovo } from './components/about.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import ProductCard from './components/productcard.jsx'
import { Production } from './components/production.jsx'
import { SimpleSlider } from './components/slider.jsx'
import Technic from './components/technic.jsx'


import './css/App.css'
import './css/bootstrap.css'

import product from './img/Product.png'
import leb1 from './img/leb1.png'
import leb2 from './img/leb2.png'
import mpk from './img/mpk.png'
import mrp from './img/red.png'
import reductor from './img/reductor.png'

function App() {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const maxWidth = 1240; // Максимальная ширина экрана

    if (screenWidth !== maxWidth) {
        window.innerWidth = maxWidth;
    }
  },[])
  return (
    <div>
      <Header/>
      <content>
        <SimpleSlider />
        <div id='main-container'>
          <Technic/>
        </div>
        <div id = 'main-container'>
          <AboutCompany/>
        </div>
          <Production/>
        <productCard>
          <img className='mt-5' src={product} alt="product"/>
          <div id='container' style={{ display: "flex", flexWrap: "wrap" }}>
              <ProductCard i={"mrp"} image={mrp} text={<div>Мотор-редуктор<br /> планетарный<br /> серии МРП</div>}/>
              <ProductCard i={"leb1"} needtomove={true} image={leb1} text={<div>Планетарные<br /> грузоподъемные лебедки<br /> серии ЛПМ</div>}/>
              <ProductCard i={"mpk"} image={mpk} text={<div>Планетарные<br /> механизмы поворота<br />серии МПК</div>}/>
              <ProductCard i={"leb2"} needtomove={true} image={leb2} text={<div>Планетарные<br /> грузоподъемные лебедки<br /> серии ЛПК</div>}/><br />
              <ProductCard i={"reductor"} needtomove={true} image={reductor} text={<div>Планетарный редуктор<br /> привода хода<br/> </div>}/>
          </div>
        </productCard>
        <div id='main-container'>
        <AboutSkolkovo/>
        </div>
      </content>
      <Footer/>
      <noscript style={{color: '#000'}}> Возможно в вашем браузере отключен JavaScript смените браузер или перезагрузите страницу </noscript>
    </div>
  )
}

export default App;