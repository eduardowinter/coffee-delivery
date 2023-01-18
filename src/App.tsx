import {
  MapPin,
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from 'phosphor-react'
import './App.css'
import logo from './assets/logo-coffee-delivery.svg'
import coffee from './assets/Coffee.png'
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
        <div className="banner-left">
          <div className="banner-phrase">
            <h1>
              Find the perfect coffee<br></br> for any time of the day
            </h1>
            <h6>
              With Coffee Delivery you receive your coffee anywhere,<br></br> at
              any time of the day.
            </h6>
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

function ProductBox() {
  return (
    <div className="product-box">
      <img
        className="product-image"
        src={coffee}
        alt="tradicional-express-coffee"
      />
      <div className="product-tags">
        <div className="product-tag">Tradicional</div>
        <div className="product-tag">Gelado</div>
      </div>
      <div className="product-name">Expresso Tradicional</div>
      <div className="product-description">
        O tradicional café feito com água quente e grãos moídos
      </div>
      <div className="product-shopping-container">
        <div className="product-price">R$ 9,90</div>
        <div className="product-shopping">
          <div className="product-quantity-selector">
            <Minus size={16} weight="fill" />
            1
            <Plus size={16} weight="fill" />
          </div>
          <div className="product-shoping-cart-icon">
            <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductList() {
  return (
    <>
      <div className="products-list-title">Our Coffees</div>
      <div className="products-list">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
    </div>
  )
}

export default App
