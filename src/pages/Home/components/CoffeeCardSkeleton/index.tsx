import { CardSkeleton, CardSkeletonContainer, Skeleton } from './styles'

type CoffeeCardSkeletonProps = {
  quantity: number
}

export function CoffeeCardSkeleton({ quantity = 4 }: CoffeeCardSkeletonProps) {
  return (
    <CardSkeletonContainer>
      {Array.from({ length: quantity }).map((_, index) => (
        <CardSkeleton key={index}>
          {/* Skeleton for the image */}
          <Skeleton style={{ width: '100%', height: '180px' }} />
          {/* Skeleton for the title */}
          <Skeleton style={{ width: '60%', height: '20px' }} />
          {/* Skeleton for the description */}
          <Skeleton style={{ width: '40%', height: '16px' }} />
        </CardSkeleton>
      ))}
    </CardSkeletonContainer>
  )
}
