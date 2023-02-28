import { TaskForm } from './Task.Form/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  const handleSubmit = (title, description) => {
    setId(id + 1);
    const taskId = id;
    setTasks([...tasks, { title, description, id: taskId }]);
  };

  return (
    <div>
      <h1>To do list</h1>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
};
