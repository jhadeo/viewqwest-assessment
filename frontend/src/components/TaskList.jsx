export function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="p-6 bg-white rounded shadow-sm">
        <h2 className="text-lg font-medium text-gray-700">No tasks yet</h2>
        <p className="text-sm text-gray-500 mt-1">
          Create your first task using the form.
        </p>
      </div>
    );
  }
  return (
    <div className="p-6 bg-white rounded shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border rounded bg-gray-50">
            <h3 className="font-medium text-gray-900">{task.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {task.description ?? "No description provided"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
