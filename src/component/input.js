import { useState } from "react";

export default function Input(props) {
  const [valueA, setValueA] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={valueA}
          onChange={(event) => {
            setValueA(event.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            props.click(valueA);
            setValueA("");
          }}
        >
          <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-secondary" type="reset">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </form>
  );
}
