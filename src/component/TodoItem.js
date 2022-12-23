import Task from "./Task";
import TodoForm from "./TodoForm";
// import TodoForm from "./TodoForm";

export default function TotoItem() {
  return (
    <li className="list-group-item p-3 text-bg-danger">
      {/* <TodoForm /> */}
      <Task />
    </li>
  );
}
