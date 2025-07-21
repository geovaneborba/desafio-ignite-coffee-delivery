import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/CartContext'
import { Router } from './routes/Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { useEffect, useState } from 'react'
import { SplashScreen } from './components/SplashScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const delay = 3500 // 4 segundos de carregamento para o splash screen

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          {isLoading ? (
            <SplashScreen />
          ) : (
            <BrowserRouter>
              {' '}
              <Router />{' '}
            </BrowserRouter>
          )}
        </CartProvider>

        <GlobalStyles />
        <ToastContainer limit={5} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
