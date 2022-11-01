const Users = (props) => {
  const { users } = props;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
