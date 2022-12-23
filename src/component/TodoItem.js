import Task from "./Task";
import TodoForm from "./TodoForm";
// import TodoForm from "./TodoForm";

export default function TotoItem(props) {
  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? "success" : "danger"
      }`}
    >
      {/* <TodoForm /> */}
      <Task todo={props.todo} deleTaskP={props.deleTaskP} />
    </li>
  );
}
