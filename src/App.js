import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TotoItem from "./component/TodoItem";

const intData = [
  { id: uuidv4(), title: "Playss", completed: false },
  { id: uuidv4(), title: "Playsdas", completed: true }
];

function App() {
  const [tasks, setTasks] = useState(intData);

  const createTask = (input) => {
    const newTask = { id: uuidv4(), title: input, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const deleTask = (idTask) => {
    console.log(idTask);
  };
  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      <TodoForm addTask={createTask} />

      <br />
      <ul className="list-group">
        {tasks.map((el) => (
          <TotoItem key={el.id} todo={el} deleTaskP={deleTask} />
        ))}
      </ul>
    </div>
  );
}

export default App;

{
  /* <li className="list-group-item p-3">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" value="Play game" />
              <button className="btn btn-primary">
                <i className="fa-solid fa-check" />
              </button>
              <button className="btn btn-secondary">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </form>
        </li>
        <li className="list-group-item p-3 text-bg-success">
          <div className="d-flex align-items-center">
            <span className="flex-fill">Meet the dentist</span>
            <div className="btn-group">
              <button className="btn btn-outline-light">
                <i className="fa-solid fa-repeat" />
              </button>
              <button className="btn btn-outline-light">
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        </li>
      </ul> */
}
