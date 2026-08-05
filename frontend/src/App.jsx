import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tasks");
        const json = await response.json();

        setTasks(json.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setTitle(title.trim());
    setDesc(desc.trim());

    const task = { title };

    if (desc) {
      task.description = desc;
    }

    try {
      const response = await fetch("http://localhost:8000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
      
      const { data: newTask } = await response.json();
      
      setTasks([newTask, ...tasks]);
      setDesc("");
      setTitle("");

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
          <p className="text-sm text-gray-500">Create and view your tasks</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <TaskList tasks={tasks} />
          </section>

          <aside className="md:col-span-1">
            <TaskForm
              title={title}
              desc={desc}
              setDesc={setDesc}
              setTitle={setTitle}
              handleSubmit={handleSubmit}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
