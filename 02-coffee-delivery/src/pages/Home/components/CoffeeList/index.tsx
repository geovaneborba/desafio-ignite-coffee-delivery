import {
  AddToCartButton,
  BuyContainer,
  CoffeeCard,
  CoffeeCardActions,
  CoffeeCardsContainer,
  CoffeeListContainer,
  CoffeeTypes,
  PriceContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useCart } from '../../../../context/CartContext'
import {
  DecrementButton,
  IncrementButton,
  IncrementorContainer,
} from '../../../../components/IncrementorButton/styles'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imgUrl: string
  type: []
  quantity: number
}

export function CoffeeList() {
  const [products, setProducts] = useState<Product[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/products', {
        method: 'GET',
      }).then((response) => response.json())

      setProducts(
        response.map((product: Product) => {
          return { ...product, quantity: 0 }
        })
      )
    }
    fetchData()
  }, [])

  function handleIncrement(product: Product) {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return { ...prevProduct, quantity: prevProduct.quantity + 1 }
        }
        return prevProduct
      })
    )
  }

  function handleDecrement(product: Product) {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id && prevProduct.quantity > 0) {
          return { ...prevProduct, quantity: prevProduct.quantity - 1 }
        }
        return prevProduct
      })
    )
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeCardsContainer>
        {products.map((product) => (
          <CoffeeCard key={product.id}>
            <img src={product.imgUrl} alt="Café Expresso Tradicional" />
            <CoffeeTypes>
              {product.type.map((type, index) => (
                <span key={index}>{type}</span>
              ))}
            </CoffeeTypes>

            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <BuyContainer>
              <PriceContainer>
                R$
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                  }).format(product.price)}
                </span>
              </PriceContainer>

              <CoffeeCardActions>
                <IncrementorContainer>
                  <DecrementButton
                    onClick={() => {
                      handleDecrement(product)
                    }}
                  >
                    <Minus weight="fill" />
                  </DecrementButton>

                  <span>{product.quantity}</span>

                  <IncrementButton
                    onClick={() => {
                      handleIncrement(product)
                    }}
                  >
                    <Plus weight="fill" />
                  </IncrementButton>
                </IncrementorContainer>

                <AddToCartButton
                  onClick={() => {
                    addItem({ ...product, quantity: product.quantity })
                  }}
                >
                  <ShoppingCart weight="fill" />
                </AddToCartButton>
              </CoffeeCardActions>
            </BuyContainer>
          </CoffeeCard>
        ))}
      </CoffeeCardsContainer>
    </CoffeeListContainer>
  )
}
