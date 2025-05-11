import { useLocation } from 'react-router-dom';
import { Main } from '../styles/main.styles';
import ErrorMessage from '../components/common/error-message';

export default function Error() {
  const { state } = useLocation();
  return (
    <Main>
      <ErrorMessage>{state}</ErrorMessage>
    </Main>
  );
}
