import { Task } from "../interfaces/Task.interface";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <div className="card card-body bg-secondary rounder-0 text-dark">
      <h2>{task.title.toLocaleUpperCase()}</h2>
      <p>{task.description}</p>
      <button onClick={() => task.id && deleteTask(task.id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
