export const Task = ({ task }) => {
  return (
    <>
      <tr>
        <td>{task.id}.</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    </>
  );
};
