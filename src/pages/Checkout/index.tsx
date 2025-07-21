import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { FormDeliveryAddress } from './components/FormDeliveryAddress'
import { ShoppingCart } from './components/ShoppingCart'

import { CheckoutContainer, FormContainer } from './styles'
import { useCart } from '../../context/CartContext'
import { toast } from 'react-toastify'

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
export type CheckoutFormData = z.infer<typeof checkoutSchema>

export function Checkout() {
  const { cartItems, cartItemsPrice } = useCart()
  const formDeliveryAddress = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })
  const navigate = useNavigate()

  const { handleSubmit } = formDeliveryAddress

  function checkoutFormSubmit(data: CheckoutFormData) {
    if (cartItems.length === 0) {
      toast.error('Seu carrinho está vazio!')

      return
    }

    const order = {
      ...data,
      cartItems,
      cartItemsPrice,
    }

    navigate('/success', { state: { params: order } })
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <FormProvider {...formDeliveryAddress}>
          <form onSubmit={handleSubmit(checkoutFormSubmit)}>
            <FormDeliveryAddress />

            <ShoppingCart />
          </form>
        </FormProvider>
      </FormContainer>
    </CheckoutContainer>
  )
}
