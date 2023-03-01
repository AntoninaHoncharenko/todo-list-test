import { TaskForm } from './Task.Form/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useState } from 'react';
import { Container, Title } from './App.styled';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  const handleSubmit = (title, description) => {
    setId(id + 1);
    const taskId = id;
    setTasks([...tasks, { title, description, id: taskId, completed: false }]);
  };

  const toggleCompleted = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <Title>To do list</Title>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted} />
    </Container>
  );
};
