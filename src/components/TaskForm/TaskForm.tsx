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
  const [titleInput, setTitleInput] = useState<string | null>(null);
  const [descriptionInput, setDescriptionInput] = useState<string | null>(null);

  function setLocalState(form: HTMLFormElement & { title: HTMLInputElement }) {
    setTitleInput(form.title.value);
    setDescriptionInput(form.descr.value);
  }

  function reset(event: React.FormEvent<HTMLFormElement>) {
    const form = event.target as HTMLFormElement;
    form.reset();
    setTitleInput(null);
    setDescriptionInput(null);
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
            titleInput={titleInput}
          />
        </Label>
        {titleInput === '' && <Error>This field is empty</Error>}
      </div>
      <div>
        <Label>
          Description
          <DescrInput
            type="text"
            name="descr"
            placeholder="Enter description"
            descriptionInput={descriptionInput}
          />
        </Label>
        {descriptionInput === '' && <Error>This field is empty</Error>}
      </div>
      <Wrap>
        <Button type="submit">Add task</Button>
      </Wrap>
    </Form>
  );
};
