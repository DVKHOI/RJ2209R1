import React from "react";

const NameItem = ({item}) => {
  const {id, name,age,arrValue} = item
  return (
    <tr className="border-solid">
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{arrValue}</td>
    </tr>
  );
};

export default NameItem;
