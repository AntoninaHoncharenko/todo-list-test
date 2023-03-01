import { ModalContainer } from '../TaskModal/ModalContainer';
import { ModalContent } from '../TaskModal/ModalContent';
import { useState } from 'react';
import { TableTd, TableTr } from './Task.styled';

export const Task = ({ task, toggleCompleted }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = event => {
    if (event.target.nodeName === 'INPUT') {
      return;
    }
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <TableTr onClick={openModal}>
        <TableTd>{task.id}.</TableTd>
        <TableTd>{task.title}</TableTd>
        <TableTd>{task.description}</TableTd>
        <TableTd>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
        </TableTd>
      </TableTr>
      {isOpenModal && (
        <ModalContainer onModalClose={closeModal}>
          <ModalContent task={task} toggleCompleted={toggleCompleted} />
        </ModalContainer>
      )}
    </>
  );
};
