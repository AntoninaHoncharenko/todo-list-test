import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 400px;
  height: 150px;
  padding: 20px;
  background-color: white;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
