import rakutenLogo from '../../../assets/images/rakutentv.png';
import { Container, HomeLink } from './header.styles';

export default function Header() {
  return (
    <Container>
      <HomeLink to="/">
        <img src={rakutenLogo} alt="Rakuten Logo" />
      </HomeLink>
    </Container>
  );
}
