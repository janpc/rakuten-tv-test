import Modal from '../../common/modal/modal';
import spinner from '../../../assets/images/spinner.svg';
import { Loading, LoadingContainer } from './details.styles';

export default function Detils() {
  return (
    <Modal>
      <LoadingContainer>
        <Loading src={spinner} alt="Loading..." />
      </LoadingContainer>
    </Modal>
  );
}
