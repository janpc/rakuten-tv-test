import {
  Background, CloseButton, CloseCross, Content,
} from './modal.styles';
import close from '../../../assets/images/close.svg';

export default function Modal({ children, onClose }) {
  return (
    <Background onClick={onClose}>
      <Content>
        <CloseButton onClick={onClose}>
          <CloseCross alt="Close modal" src={close} />
        </CloseButton>
        {children}
      </Content>
    </Background>
  );
}
