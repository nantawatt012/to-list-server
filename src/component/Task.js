export default function Task(props) {
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill">{props.todo.title}</span>
      <div className="btn-group">
        <button className="btn btn-outline-light">
          <i className="fa-solid fa-repeat" />
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => props.deleTaskP(props.todo.id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
