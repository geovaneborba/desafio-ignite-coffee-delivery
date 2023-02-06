import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { checkoutFormData } from '../..'
import {
  FormDeliveryAddressContainer,
  FormHeader,
  CreditButton,
  DebitButton,
  FormInputContainer,
  FormInputGroup,
  FormPayment,
  FormPaymentHeader,
  FormPayments,
  MoneyButton,
  FormDeliveryAddressBackground,
} from './styles'

interface Address {
  bairro: string
  cep: string
  complemento?: string
  localidade: string
  logradouro: string
  uf: string
}

const zipCodeSchema = z.object({
  zipCode: z.string().min(8).max(8),
})

export function FormDeliveryAddress() {
  const [address, setAddress] = useState<Address>({} as Address)
  const [zipCode, setZipCode] = useState('')
  const [zipCodeMask, setZipCodeMask] = useState('')
  const [selectedPaymentButton, setSelectedPaymentButton] = useState('')

  const { register, setValue } = useFormContext<checkoutFormData>()

  function validateZipCode() {
    const zipCodeOnlyNumbers = zipCodeMask.replace('-', '')

    const validate = zipCodeSchema.safeParse({ zipCode: zipCodeOnlyNumbers })

    if (validate.success) {
      setZipCode(validate.data.zipCode)
      setValue('zipCode', validate.data.zipCode)
    }
  }

  function applyZipCodeMask(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value

    const formattedValue = raw
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/(\d{5})(\d)/, '$1-$2')

    setZipCodeMask(formattedValue)
  }

  async function fetchData() {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`, {
      method: 'GET',
    }).then((response) => response.json())

    if (response.erro) {
      setZipCodeMask('')
    }

    setAddress(response)
  }

  useEffect(() => {
    if (zipCode.length !== 0) {
      fetchData()
    }
  }, [zipCode])

  return (
    <FormDeliveryAddressContainer>
      <FormDeliveryAddressBackground>
        <FormHeader>
          <MapPin />
          <div>
            <h4>Endereço de Entrega</h4>
            <h6>Informe o endereço onde deseja receber seu pedido</h6>
          </div>
        </FormHeader>

        <FormInputContainer>
          <input
            value={zipCodeMask ? zipCodeMask : ''}
            {...register('zipCode')}
            type="string"
            id="zipcode"
            placeholder="CEP"
            onChange={applyZipCodeMask}
            onBlur={validateZipCode}
          />

          <input
            type="text"
            id="street"
            placeholder="Rua"
            defaultValue={address.logradouro}
            {...register('street')}
          />
          <input
            type="text"
            id="number"
            placeholder="Número"
            {...register('streetNumber', { valueAsNumber: true })}
          />
          <FormInputGroup>
            <input
              type="text"
              id="complement"
              placeholder="Complemento"
              defaultValue={address.complemento}
              {...register('complement')}
            />
            <label htmlFor="complement" title="Opcional">
              Opcional
            </label>
          </FormInputGroup>
          <input
            type="text"
            id="district"
            placeholder="Bairro"
            defaultValue={address.bairro}
            {...register('district')}
          />
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            defaultValue={address.localidade}
            {...register('city')}
          />
          <input
            type="text"
            id="state"
            placeholder="UF"
            defaultValue={address.uf}
            {...register('state')}
          />
        </FormInputContainer>
      </FormDeliveryAddressBackground>

      <FormPayment>
        <FormPaymentHeader>
          <CurrencyDollar />
          <div>
            <h4>Pagamento</h4>
            <h6>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h6>
          </div>
        </FormPaymentHeader>
        <FormPayments>
          <label>
            <CreditButton
              selectedPaymentMethod={selectedPaymentButton}
              type="button"
              onClick={() => {
                setValue('paymentMethod', '')
                setValue('paymentMethod', 'credit')
                setSelectedPaymentButton('credit')
              }}
            >
              <CreditCard />
              Cartão de crédito
            </CreditButton>
          </label>

          <label>
            <DebitButton
              selectedPaymentMethod={selectedPaymentButton}
              type="button"
              onClick={() => {
                setValue('paymentMethod', '')
                setValue('paymentMethod', 'debit')
                setSelectedPaymentButton('debit')
              }}
            >
              <Bank />
              Cartão de débito
            </DebitButton>
          </label>

          <label>
            <MoneyButton
              selectedPaymentMethod={selectedPaymentButton}
              type="button"
              onClick={() => {
                setValue('paymentMethod', '')
                setValue('paymentMethod', 'money')
                setSelectedPaymentButton('money')
              }}
            >
              <Money />
              Dinheiro
            </MoneyButton>
          </label>
        </FormPayments>
      </FormPayment>
    </FormDeliveryAddressContainer>
  )
}
