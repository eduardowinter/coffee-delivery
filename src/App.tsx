import { MapPin, ShoppingCart } from 'phosphor-react'
import './App.css'
import logo from './assets/logo-coffee-delivery.svg'
import coffeeArt from './assets/coffee-art.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="coffee-delivery-logo" height={40} />
      <div className="header-actions">
        <div className="header-locale">
          <MapPin size={22} color="#8047F8" weight="fill" />
          Florianópolis, SC
        </div>
        <div className="header-shopping-cart">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </div>
      </div>
    </header>
  )
}

function Banner() {
  return (
    <div className="banner">
      <div>
        <div>
          Find the perfect coffee<br></br> for any time of the day
        </div>
        <div className="banner-benefits">
          <div className="item1">Vantagens</div>
          <div className="item2">outra vant</div>
          <div className="item3">outra vant</div>
          <div className="item4">outra vant</div>
        </div>
      </div>
      <img src={coffeeArt} alt="coffee-art" />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />

      <Banner />

      <div className="products-list">Products-List</div>
    </div>
  )
}

export default App
