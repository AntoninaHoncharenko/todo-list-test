import { useState } from 'react';
import {
  Form,
  Label,
  TitleInput,
  DescrInput,
  Button,
  Error,
  Wrap,
} from './TaskForm.styled';

interface IProps {
  onSubmit: (title: string, description: string) => void;
}

export const TaskForm: React.FC<IProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  function setLocalState(form: HTMLFormElement & { title: HTMLInputElement }) {
    setTitle(form.title.value);
    setDescription(form.descr.value);
  }

  function reset(event: React.FormEvent<HTMLFormElement>) {
    const form = event.target as HTMLFormElement;
    form.reset();
    setTitle(null);
    setDescription(null);
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & { title: HTMLInputElement }>
  ) => {
    event.preventDefault();

    setLocalState(event.currentTarget);

    const title = event.currentTarget.title.value;
    const description = event.currentTarget.descr.value;

    if (title === '' || description === '') {
      return;
    }

    onSubmit(title, description);
    reset(event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>
          Title
          <TitleInput
            type="text"
            name="title"
            placeholder="Enter title"
            title={title}
          />
        </Label>
        {title === '' && <Error>This field is empty</Error>}
      </div>
      <div>
        <Label>
          Description
          <DescrInput
            type="text"
            name="descr"
            placeholder="Enter description"
            description={description}
          />
        </Label>
        {description === '' && <Error>This field is empty</Error>}
      </div>
      <Wrap>
        <Button type="submit">Add task</Button>
      </Wrap>
    </Form>
  );
};
