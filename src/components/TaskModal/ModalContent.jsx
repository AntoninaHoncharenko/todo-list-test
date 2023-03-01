import { Title } from './ModalContent.styled';

export const ModalContent = ({ task, toggleCompleted }) => {
  return (
    <div>
      <Title>{task.title}</Title>
      <b>Description:</b>
      <p>{task.description}</p>
      <b>
        Status:
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
      </b>
    </div>
  );
};
