import React, { useState } from "react";

const NewUser = (props) => {
  const { users, setUser } = props;

  const [newUser, setNewUser] = useState("");

  return (
    <div>
      <input value={newUser} onChange={(e) => setNewUser(e.target.value)} />
      <button
        onClick={() => {
          setUser([newUser, ...users]);
          setNewUser("");
        }}
      >
        submit{" "}
      </button>
    </div>
  );
};

export default NewUser;
