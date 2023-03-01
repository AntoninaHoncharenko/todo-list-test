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

export const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  function setLocalState(form) {
    setTitle(form.title.value);
    setDescription(form.descr.value);
  }

  function reset(event) {
    event.target.reset();
    setTitle(null);
    setDescription(null);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;

    setLocalState(form);

    const title = form.title.value;
    const description = form.descr.value;

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
