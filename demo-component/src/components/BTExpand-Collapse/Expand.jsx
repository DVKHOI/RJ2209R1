import React from "react";

const Expand = () => {
  const [isExpand, setIsExpand] = React.useState(false);
  function handleButton() {
    setIsExpand((isExpand) => !isExpand);
  }
  if (!isExpand) {
    return (
      <div>
        <div className="header">Conditional Rendering</div>
        <button onClick={handleButton}>Xem giới thiệu</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header">Conditional Rendering</div>
        <button onClick={handleButton}>Đóng giới thiệu</button>
        <div>
          <h3>ReactJS</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            perspiciatis neque suscipit praesentium, explicabo saepe nisi harum
            nesciunt iusto libero facere illo distinctio animi autem. Fugit enim
            eveniet repellendus ea.
          </p>
        </div>
      </div>
    );
  }
};

export default Expand;
