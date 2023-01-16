import { MapPin, ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
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
    <div className="banner-container">
      <div className="banner">
        <div>
          <div className="banner-phrase">
            <div>
              Find the perfect coffee<br></br> for any time of the day
            </div>
          </div>
          <div className="banner-benefits">
            <div className="table-left">
              <div className="table-a1">
                <div className="icon-1">
                  <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
                </div>
                Easy and safe purchase
              </div>
              <div className="table-a1">
                <div className="icon-2">
                  <Timer size={16} color="#FAFAFA" weight="fill" />
                </div>
                Fast and tracked delivery
              </div>
            </div>
            <div className="table-right">
              <div className="table-a1">
                <div className="icon-3">
                  <Package size={16} color="#FAFAFA" weight="fill" />
                </div>
                Package mantains coffee intact
              </div>
              <div className="table-a1">
                <div className="icon-4">
                  <Coffee size={16} color="#FAFAFA" weight="fill" />
                </div>
                Coffee arrives fresh for you
              </div>
            </div>
          </div>
        </div>
        <img src={coffeeArt} alt="coffee-art" />
      </div>
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
