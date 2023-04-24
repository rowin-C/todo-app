import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewitem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewitem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <lable htmlfor="item"> New Item </lable>
        <input
          value={newItem}
          onChange={(e) => setNewitem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
