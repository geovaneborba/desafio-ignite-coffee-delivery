import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { FormDeliveryAddress } from './components/FormDeliveryAddress'
import { ShoppingCart } from './components/ShoppingCart'

import { CheckoutContainer, FormContainer } from './styles'
import { useCart } from '../../context/CartContext'

const checkoutSchema = z.object({
  zipCode: z.string().min(8).max(8),
  street: z.string().min(1),
  streetNumber: z.number().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

export interface checkoutFormData {
  zipCode: string
  street: string
  streetNumber: number
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: string
}

export function Checkout() {
  const formDeliveryAddress = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })
  const navigate = useNavigate()

  const { handleSubmit } = formDeliveryAddress

  function checkoutFormSubmit(data: checkoutFormData) {
    navigate('/success', { state: { data } })
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <div>
          <h3>Complete seu pedido</h3>
        </div>

        <form action="/success" onSubmit={handleSubmit(checkoutFormSubmit)}>
          <FormProvider {...formDeliveryAddress}>
            <FormDeliveryAddress />
          </FormProvider>

          <ShoppingCart />
        </form>
      </FormContainer>
    </CheckoutContainer>
  )
}
