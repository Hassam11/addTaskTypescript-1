import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./interfaces/Task.interface";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Lean React",
      completed: false,
    },
  ]);

  const getCurrentTimeSTamp = ():number =>  new Date().getTime()

  const newAddTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimeSTamp(), completed: false}])
  
  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            AddTaskTypeScript
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
