import { Header } from './components/Header'
import { CoffeeCardsContainer, CoffeesSection, HomeContainer } from './styles'

import { CoffeeCardSkeleton } from './components/CoffeeCardSkeleton'

import { useProducts } from '../../hooks/useProducts'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  const { products, isLoadingProducts } = useProducts()

  return (
    <HomeContainer>
      <Header />

      <CoffeesSection>
        <h2>Nossos cafés</h2>

        <CoffeeCardsContainer>
          {isLoadingProducts ? (
            <CoffeeCardSkeleton quantity={8} />
          ) : (
            <>
              {products &&
                products.map((product) => (
                  <CoffeeCard key={product.id} product={product} />
                ))}
            </>
          )}
        </CoffeeCardsContainer>
      </CoffeesSection>
    </HomeContainer>
  )
}
