import React from "react";

const Alert = () => {
  const [display, setDisplay] = React.useState(true);
  function handleDelete() {
    alert("The component is going to be unmounted");
    setDisplay((display) => (display = false));
  }

  if (display) {
    return (
      <div className="alert-main">
        <h1 className="alert-title">Hello Word!!!</h1>
        <button className="alert-btn" onClick={handleDelete}>
          Delete the components
        </button>
      </div>
    );
  } else {
    return (
      <div className="alert-main">
        <p className="alert-text">Components deleted</p>
        <button className="alert-btn" onClick={handleDelete}>
          Delete the components
        </button>
      </div>
    );
  }
};

export default Alert;
