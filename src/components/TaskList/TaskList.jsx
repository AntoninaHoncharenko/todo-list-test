import { Task } from 'components/Task/Task';

export const TaskList = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => {
          return <Task task={task} key={task.id} />;
        })}
      </tbody>
    </table>
  );
};
