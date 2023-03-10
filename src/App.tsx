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
import coffeeArt from './assets/coffee-art.png'
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react'
import { Badge, createTheme, ThemeProvider } from '@mui/material'

const products = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8.3,
    image_link: '/src/assets/Coffee.png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.8,
    image_link: '/src/assets/Coffee (1).png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    tags: ['Tradicional', 'Gelado'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.0,
    image_link: '/src/assets/Coffee (2).png',
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 8.8,
    image_link: '/src/assets/Coffee (3).png',
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 10.5,
    image_link: '/src/assets/Coffee (4).png',
  },
  {
    id: uuidv4(),
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8.7,
    image_link: '/src/assets/Coffee (5).png',
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 10.9,
    image_link: '/src/assets/Coffee (6).png',
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 11.6,
    image_link: '/src/assets/Coffee (7).png',
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.5,
    image_link: '/src/assets/Coffee (8).png',
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.5,
    image_link: '/src/assets/Coffee (9).png',
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 10.4,
    image_link: '/src/assets/Coffee (10).png',
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.4,
    image_link: '/src/assets/Coffee (11).png',
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 10.0,
    image_link: '/src/assets/Coffee (12).png',
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 11.6,
    image_link: '/src/assets/Coffee (13).png',
  },
]

function Header({ badgeCount }) {
  return (
    <header>
      <img src={logo} alt="coffee-delivery-logo" height={40} />
      <div className="header-actions">
        <div className="header-locale">
          <MapPin size={22} color="#8047F8" weight="fill" />
          Florianópolis, SC
        </div>
        <Badge color="primary" badgeContent={badgeCount}>
          <div className="header-shopping-cart">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </div>
        </Badge>
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
            <p>
              With Coffee Delivery you receive your coffee anywhere,<br></br> at
              any time of the day.
            </p>
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

function ProductBoxItem({ productItem, onIconClick }) {
  const product = productItem

  const [productQuantity, setProductQuantity] = useState(1)

  function handleDecreaseQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    if (productQuantity < 10) {
      setProductQuantity(productQuantity + 1)
    }
  }

  return (
    <>
      <div key={product.id} className="product-box">
        <img
          className="product-image"
          src={product.image_link}
          alt={product.name}
        />
        <div className="product-tags">
          {product.tags.map((tag) => (
            <div key={tag} className="product-tag">
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-shopping-container">
          <div className="product-price">
            US$ <span>{product.price.toFixed(2)}</span>
          </div>
          <form className="product-shopping">
            <div className="product-quantity-selector">
              <Minus
                size={16}
                color="#8047F8"
                weight="bold"
                onClick={handleDecreaseQuantity}
              />
              {productQuantity}

              <Plus
                size={16}
                color="#8047F8"
                weight="bold"
                onClick={handleIncreaseQuantity}
              />
            </div>
            <button
              className="product-shoping-cart-icon"
              onClick={onIconClick}
              id={product.id}
              value={productQuantity}
            >
              <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

function ProductBox({ onIconClick }) {
  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <ProductBoxItem
            key={product.id}
            productItem={product}
            onIconClick={onIconClick}
          />
        )
      })}
    </div>
  )
}

function ProductList({ onIconClick }) {
  return (
    <>
      <h2 className="products-list-title">Our Coffees</h2>
      <ProductBox onIconClick={onIconClick} />
    </>
  )
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#C47F17',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  })

  const [shoppingCartBasket, setShoppingCartBasket] = useState([])

  function calculateTotalQuantityShoppingCart() {
    const shoppingCartQuantityArray = shoppingCartBasket.map(
      (shoppingCart) => shoppingCart[1],
    )

    console.log(shoppingCartBasket)

    const totalQuantityShoppingCart = shoppingCartQuantityArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    )
    console.log(totalQuantityShoppingCart)

    return totalQuantityShoppingCart
  }

  function handleAddToShoppingCart(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    setShoppingCartBasket([
      ...shoppingCartBasket,
      [event?.currentTarget.id, +event?.currentTarget.value],
    ])
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header badgeCount={calculateTotalQuantityShoppingCart()} />
        <Banner />
        <ProductList onIconClick={handleAddToShoppingCart} />
      </div>
    </ThemeProvider>
  )
}

export default App
