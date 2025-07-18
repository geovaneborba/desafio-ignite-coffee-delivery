import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { LayoutContainer } from './styles'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Navbar />

        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  )
}
