import { Link } from 'react-router-dom';
import rakutenLogo from '../../../assets/images/rakutentv.png';
import { Container, Logo, Message } from './error-message.styles';

export default function ErrorMessage({ children }) {
  return (
    <Container>
      <Link to="/">
        <Logo src={rakutenLogo} alt="Rakuten Logo" />
      </Link>
      <Message>{children || 'Something went wrong!'}</Message>
    </Container>
  );
}
