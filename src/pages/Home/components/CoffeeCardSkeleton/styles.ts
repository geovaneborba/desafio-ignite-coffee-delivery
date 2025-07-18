import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

export const CardSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;

  @media ((min-width: 601px) and (max-width: 960px)) {
    flex-direction: row;
  }

  @media (min-width: 961px) {
    flex-direction: row;
  }
`

export const CardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 16rem;
  padding: 1rem;

  @media ((min-width: 321px) and (max-width: 600px)) {
    max-width: 100%;
  }

  @media (min-width: 601px) and (max-width: 960px) {
    max-width: calc(50% - 1rem);
  }
`

export const Skeleton = styled.div`
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`
