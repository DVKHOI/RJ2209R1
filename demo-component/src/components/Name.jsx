import React from "react";
import useListName from "../hooks/useListName";

const Name = () => {
  const { name, setName, updateName, listName, removeElement } = useListName();
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="input"
      />

      <button className="btn" onClick={() => updateName(name)}>
        Add
      </button>
      {listName.map((item) => (
        <ul>
          <li key={item.id}>
            {item.task}{" "}
            <button className="btn-delete" onClick={() => removeElement(item)}>
              Edit
            </button>
            <button className="btn-delete" onClick={() => removeElement(item)}>
              X
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Name;
