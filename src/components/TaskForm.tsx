import { AiOutlinePlus } from "react-icons/ai";
import { useState, ChangeEvent, FormEvent } from "react";
import { Task } from "../interfaces/Task.interface";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
    newAddTask: (task: Task) => void;
}

const initialState = {
    title: "",
    description: "",
}

const TaskForm = ({ newAddTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add Task</h2>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounder-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={3}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
