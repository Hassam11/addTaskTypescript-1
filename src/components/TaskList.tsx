import { Task } from "../interfaces/Task.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>
        </div>
      ))}
    </>
  );
};

export default TaskList;
