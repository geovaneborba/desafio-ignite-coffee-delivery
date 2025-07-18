import { Container } from './styles'

type CoffeeCategoriesProps = {
  categories: string[]
}

export function CoffeeCategories({ categories }: CoffeeCategoriesProps) {
  return (
    <Container>
      {categories.map((type, index) => (
        <span key={`${type}-${index}`}>{type}</span>
      ))}
    </Container>
  )
}
