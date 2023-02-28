import { useState } from 'react';

export const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;

    setTitle(form.title.value);
    setDescription(form.descr.value);

    const title = form.title.value;
    const description = form.descr.value;

    if (title === '' || description === '') {
      return;
    }

    onSubmit(title, description);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" name="title" />
        {title === '' && <p>error title</p>}
      </label>

      <label>
        Description
        <input type="text" name="descr" />
        {description === '' && <p>error descr</p>}
      </label>

      <button type="submit">Add task</button>
    </form>
  );
};
