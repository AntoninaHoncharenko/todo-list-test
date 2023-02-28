import ReactDOM from 'react-dom/client';

export const Modal = () => {
  return ReactDOM.createPortal(
    <div>
      <b>title</b>
      <p>Description:</p>
      <p>Status:</p>
      <button type="button">Close</button>
    </div>,
    document.querySelector('#modal-root')
  );
};
