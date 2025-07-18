import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Nav } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export function Navbar() {
  const {
    cartItemsPrice: { totalItemsInCart },
  } = useCart()

  return (
    <Nav>
      <Link to="/" title="Coffee Delivery">
        <img
          src={coffeeDeliveryLogo}
          alt="Uma imagem de um copo e ao lado dele está escrito Coffee Delivery"
        />
      </Link>

      <div>
        <span title="Porto alegre">
          <MapPin weight="fill" />
          Porto Alegre
        </span>

        <Link to="/checkout">
          <button type="button" title="Carrinho de compras">
            {totalItemsInCart !== 0 && <span>{totalItemsInCart}</span>}
            <ShoppingCart weight="fill" />
          </button>
        </Link>
      </div>
    </Nav>
  )
}
