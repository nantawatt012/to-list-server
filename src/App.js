import TodoForm from "./component/TodoForm";
import TotoItem from "./component/TodoItem";
function App() {
  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      <TodoForm />

      <br />
      <ul className="list-group">
        <TotoItem />
      </ul>
    </div>
  );
}

export default App;
