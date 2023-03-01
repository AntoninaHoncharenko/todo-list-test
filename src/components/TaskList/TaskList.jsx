import { Task } from 'components/Task/Task';
import { Table, TableHeadTh } from './TaskList.styled';

export const TaskList = ({ tasks, onModalOpen, toggleCompleted }) => {
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
            <Task
              task={task}
              key={task.id}
              onModalOpen={onModalOpen}
              toggleCompleted={toggleCompleted}
            />
          );
        })}
      </tbody>
    </Table>
  );
};
