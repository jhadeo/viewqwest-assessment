export function TaskList({ tasks }) {
    if (tasks.length ===0){
        return (<>
        <h1>no tasks yet, create one</h1>
        </>);
    }
  return (
    <>
      <h1>here task</h1>
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description ?? 'no description provided'}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
