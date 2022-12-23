import { useState } from "react";

export default function SearchForm() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="input-group">
      <input type="text" className="form-control" onChange={() => {}}></input>
      <button className="btn btn-warning">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}
