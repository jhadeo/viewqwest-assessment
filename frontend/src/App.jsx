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

    if (desc){
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
      if (response.ok) {
        setTasks([...tasks, task]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <TaskList tasks={tasks} />
      <TaskForm
        title={title}
        desc={desc}
        setDesc={setDesc}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
