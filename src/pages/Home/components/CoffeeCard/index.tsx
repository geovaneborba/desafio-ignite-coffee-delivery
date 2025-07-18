import { ShoppingCart } from 'phosphor-react'
import { Product } from '../../../../reducers/cartItems/reducer'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeCategories } from '../CoffeeCategories'
import { SelectQuantity } from '../SelectQuantity'
import {
  AddToCartButton,
  BuyContainer,
  CoffeeCardActions,
  Container,
  Price,
} from './styles'

import { useCart } from '../../../../context/CartContext'
import { useState } from 'react'
import { toast } from 'react-toastify'

type CoffeeCardProps = {
  product: Product
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addItemInCart } = useCart()

  const handleAddItemInCart = (product: Product) => {
    if (quantity <= 0) {
      return toast.error('Selecione pelo menos um cafézinho')
    }

    const newProduct = { ...product, quantity }

    addItemInCart(newProduct)
    setQuantity(0)
    toast.success('Café adicionado ao carrinho')
  }

  const handleIncrement = () => setQuantity((prevState) => prevState + 1)

  const handleDecrement = () =>
    setQuantity((prevState) => (prevState <= 0 ? 0 : prevState - 1))

  return (
    <Container key={product.id}>
      <img src={product.image.url} alt={product.image.alt ?? product.title} />

      <CoffeeCategories categories={product.tags} />

      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <BuyContainer>
        <Price>
          R$ <span>{priceFormatter(product.price)}</span>
        </Price>

        <CoffeeCardActions>
          <SelectQuantity
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />

          <AddToCartButton onClick={() => handleAddItemInCart(product)}>
            <ShoppingCart weight="fill" />
          </AddToCartButton>
        </CoffeeCardActions>
      </BuyContainer>
    </Container>
  )
}
