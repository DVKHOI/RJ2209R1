import { useState } from "react";
import { v4 } from "uuid";

export default function useListName() {
  const [name, setName] = useState("");
  const [listName, setListName] = useState();

  function updateName(value) {
    const newValue = value.trim();
    const isRepeat = listName.filter(
      (item) => item.task.toLowerCase() === newValue.toLowerCase()
    );
    if (!isRepeat.length && value !== "") {
      setListName((listName) => [{ id: v4(), task: newValue }, ...listName]);
      console.log(listName);
      setName("");
    } else {
      alert("Vui long nhap lai");
      setName("");
    }
  }
  const removeElement = (name) => {
    if (window.confirm("Are you sure?")) {
      setListName(listName.filter((el) => el !== name));
    }
  };
  const updateElement = (name) => {
    if (window.confirm("Are you sure?")) {
      setListName(listName.filter((el) => el !== name));
    }
  };
  return {
    name,
    setName,
    listName,
    setListName,
    updateName,
    removeElement,
    updateElement,
  };
}
