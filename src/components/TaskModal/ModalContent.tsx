import { Title } from './ModalContent.styled';
import { ITask } from '../../types/taskType';

interface IProps {
  task: ITask;
  toggleCompleted: (taskId: number) => void;
}

export const ModalContent: React.FC<IProps> = ({ task, toggleCompleted }) => {
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
