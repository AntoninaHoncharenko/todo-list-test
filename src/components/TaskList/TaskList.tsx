import { Task } from '../Task/Task';
import { Table, TableHeadTh } from './TaskList.styled';
import { ITask } from '../../types/taskType';

interface IProps {
  tasks: ITask[];
  toggleCompleted: (taskId: number) => void;
}

export const TaskList: React.FC<IProps> = ({ tasks, toggleCompleted }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadTh>Id</TableHeadTh>
          <TableHeadTh>Title</TableHeadTh>
          <TableHeadTh>Description</TableHeadTh>
          <TableHeadTh>Status</TableHeadTh>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => {
          return (
            <Task task={task} key={task.id} toggleCompleted={toggleCompleted} />
          );
        })}
      </tbody>
    </Table>
  );
};
