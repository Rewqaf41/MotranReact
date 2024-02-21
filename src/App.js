import ProductCard from './components/productcard.jsx'
import Header from './components/header.jsx';
import Slider from './components/slider.jsx';
import Technic from './components/technic.jsx';
import { AboutCompany, AboutSkolkovo } from './components/about.jsx';
import Production from './components/production.jsx';
import Footer from './components/footer.jsx';

import './func/slick.min.js';
import './func/slick.js';

import './css/App.css';
import './css/bootstrap.css';
 
import product from './img/Product.png';
import mrp from './img/red.png'
import leb1 from './img/leb1.png'
import leb2 from './img/leb2.png'
import mpk from './img/mpk.png'

function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width" />
      <Header/>
      <content>
        <Slider/>
        <Technic/>
        <AboutCompany/>
        <Production/>
        <productCard>
          <img className='mt-5' src={product} alt="product"/>
          <div id='container'>
            <div className='nav'>
              <ProductCard image={mrp} text={<div>Мотор-редуктор<br /> планетарный<br /> (МРП)</div>}/>
              <ProductCard needtomove={true} image={leb1} text={<div>Планетарные<br /> грузоподъемные лебедки<br /> ЛПМ-6.26.100</div>}/>
              <ProductCard image={mpk} text={<div>Планетарные<br /> механизмы поворота<br />(МПК)</div>}/>
              <ProductCard needtomove={true} image={leb2} text={<div>Планетарные<br /> грузоподъемные лебедки<br /> ЛПК-40.26.100</div>}/>
            </div>
          </div>
        </productCard>
        <AboutSkolkovo/>
      </content>
      <Footer/>
    </div>
  )
}

export default App;