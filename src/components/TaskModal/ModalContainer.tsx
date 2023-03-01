import ReactDOM from 'react-dom';
import { Backdrop, ModalBox, CloseBtn } from './ModalContainer.styled';

interface IProps {
  onModalClose: () => void;
  children: JSX.Element;
}

export const ModalContainer: React.FC<IProps> = ({
  children,
  onModalClose,
}) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ModalBox>
        {children}
        <CloseBtn type="button" onClick={() => onModalClose()}>
          Close
        </CloseBtn>
      </ModalBox>
    </Backdrop>,
    document.getElementById('modal-root') as HTMLElement
  );
};
