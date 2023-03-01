import ReactDOM from 'react-dom';
import { Backdrop, ModalBox, CloseBtn } from './ModalContainer.styled';

export const ModalContainer = ({ children, onModalClose }) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ModalBox>
        {children}
        <CloseBtn type="button" onClick={() => onModalClose()}>
          Close
        </CloseBtn>
      </ModalBox>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};
