import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useState } from 'react';
import { Container, Title } from './App.styled';
import { ITask } from '../types/taskType';

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [id, setId] = useState<number>(1);

  const handleSubmit = (title: string, description: string) => {
    setId(id + 1);
    const taskId = id;
    setTasks([...tasks, { title, description, id: taskId, completed: false }]);
  };

  const toggleCompleted = (taskId: number) => {
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
