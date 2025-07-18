import { useQuery } from '@tanstack/react-query'
import { client } from '../lib/prismic'
import { Product } from '../reducers/cartItems/reducer'

export function useProducts() {
  async function getProjects() {
    const response = await client.getAllByType('products')

    const projects = response.map((result) => {
      const project: Product = {
        id: result.id,
        title: result.data.title[0].text as string,
        description: result.data.description as string,
        image: {
          url: result.data.image.url as string,
          alt: result.data.image.alt as string,
        },
        price: result.data.price,
        stock: result.data.stock,
        tags: result.tags,
      }

      return project
    })

    return projects
  }

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProjects,
  })

  return { products, isLoadingProducts: isLoading }
}
