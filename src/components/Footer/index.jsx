import { Container } from './styles';

import LogoFooter from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <div>
       
        <img src={LogoFooter} alt="Logo Restaurante" />

        <p>2024 - Food Explorer</p>
      </div>

      
    </Container>
  );
}
