import React from "react";

const MechanismRender = () => {
  const [state, setState] = React.useState({
    text: "Code Gym",
    inputText: "",
    mode: "view",
  });
  const handleChange = (e) => {
    setState({ inputText: e.target.value });
  };
  const handleSave = () => {
    setState({
      text: state.inputText,
      mode: "view",
    });
  };
  const handleEdit = () => {
    setState({
      mode: "edit",
    });
  };
  if (state.mode === "view") {
    return (
      <div>
        <p>Text: {state.text}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Text: {state.text}</p>
        <input onChange={handleChange} value={state.inputText} />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }
};

export default MechanismRender;
