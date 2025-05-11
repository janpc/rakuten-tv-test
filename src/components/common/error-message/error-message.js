import rakutenLogo from '../../../assets/images/rakutentv.png';
import { Container, Logo, Message } from './error-message.styles';

export default function ErrorMessage({ children }) {
  return (
    <Container>
      <Logo src={rakutenLogo} alt="Rakuten Logo" />
      <Message>{children || 'Something went wrong!'}</Message>
    </Container>
  );
}
