import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Input from "./component/input";
// import ChangeName from "./component/ChangeName";
function App() {
  const datas = [];

  const [task, setTrack] = useState(datas);
  const inputTask = (valueB) => {
    const nextTastState = [...task];
    nextTastState.unshift({
      id: uuidv4(),
      title: valueB,
      comple: false
    });
    setTrack(nextTastState);
  };

  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      <Input click={(valueA) => inputTask(valueA)} />

      <br />

      <ul className="list-group">
        {task.map((el) => (
          <li className="list-group-item p-3 text-bg-danger">
            <div className="d-flex align-items-center">
              <span className="flex-fill">{el.title}</span>
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
        ))}
        {/* <li className="list-group-item p-3">
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
        </li> */}
        {/* <li className="list-group-item p-3 text-bg-success">
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
        </li> */}
      </ul>
    </div>
  );
}

export default App;
