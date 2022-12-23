export default function ChangeName() {
  return (
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
  );
}
