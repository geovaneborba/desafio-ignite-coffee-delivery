import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme['base-title']} 0%,
    ${(props) => props.theme['base-subtitle']} 100%
  );
  color: ${(props) => props.theme['base-card']};
  padding: 2rem 2rem;
  margin-top: auto;
  width: 100%;

  @media (min-width: 601px) {
    padding: 2rem 2rem;
  }
`

export const FooterWrapper = styled.footer`
  max-width: 69.0625rem;
  margin: 0 auto;
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 601px) {
    &:nth-child(2) {
      width: fit-content;
      margin-left: auto;
    }

    &:nth-child(3) {
      grid-column: span 2;
    }
  }
`

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.yellow};
  margin-bottom: 0.5rem;
  position: relative;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;

    height: 2px;
    background: ${(props) => props.theme.yellow};

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const SectionDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['base-card']};
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${(props) => props.theme['base-card']};

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 960px) {
    width: fit-content;
  }

  svg {
    color: ${(props) => props.theme.yellow};
    flex-shrink: 0;
  }
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 320px) and (max-width: 960px) {
    align-items: flex-start;
    width: fit-content;
  }
`

export const FooterLink = styled.a`
  color: ${(props) => props.theme['base-card']};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: ${(props) => props.theme.yellow};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(219, 172, 44, 0.1);
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 50%;
  color: ${(props) => props.theme.yellow};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme['base-title']};
    transform: translateY(-2px);
  }
`

export const FooterBottom = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
  color: ${(props) => props.theme['base-label']};

  a {
    color: ${(props) => props.theme['base-input']};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme['background']};
    }
  }
`
