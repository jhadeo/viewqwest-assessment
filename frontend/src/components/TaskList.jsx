export function TaskList({ tasks }) {
  return (
    <>
      <h1>here task</h1>
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
