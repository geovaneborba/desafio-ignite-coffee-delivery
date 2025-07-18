import {
  MapPin,
  Phone,
  Clock,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  EnvelopeSimple,
} from 'phosphor-react'
import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterSection,
  SectionTitle,
  SocialLinks,
  SocialLink,
  ContactItem,
  FooterBottom,
  SectionDescription,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterSection>
            <SectionTitle>Coffee Delivery</SectionTitle>
            <SectionDescription>
              Entregamos o melhor café artesanal diretamente na sua porta.
              Qualidade premium, frescor garantido e sabor incomparável.
            </SectionDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FacebookLogo size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <InstagramLogo size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <TwitterLogo size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Contato</SectionTitle>
            <ContactItem>
              <MapPin size={18} />
              <span>Rua do Café, 123 - Porto Alegre - RS</span>
            </ContactItem>
            <ContactItem>
              <Phone size={18} />
              <span>(11) 9999-8888</span>
            </ContactItem>
            <ContactItem>
              <EnvelopeSimple size={18} />
              <span>contato@coffeedelivery.com</span>
            </ContactItem>
            <ContactItem>
              <Clock size={18} />
              <span>Seg - Dom: 6h às 22h</span>
            </ContactItem>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>
            © {new Date().getFullYear()} Coffee Delivery. Todos os direitos
            reservados. Desenvolvido com ❤️ e muito ☕ por{' '}
            <a
              href="https://github.com/geovaneborba"
              target="_blank"
              rel="noreferrer"
            >
              Geovane Borba
            </a>
          </p>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  )
}
