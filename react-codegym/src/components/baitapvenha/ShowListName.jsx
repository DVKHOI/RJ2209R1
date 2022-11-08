import React from "react";
import { data } from "../../dataBTNangCao";
import NameItem from "./NameItem";

const total = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

const ShowListName = () => {
  const myData = data.reduce((result, currVal) => {
    return result[`total(arrValue)`] > currVal[`total(arrValue)`]
      ? result
      : currVal;
  }, {});
  console.log(myData);
  return (
    <div>
      Name: {myData.name}
      <table className=" w-[500px]">
        <tr className="w-[500px]">
          <th className="w-5">ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Value</th>
        </tr>
        {data.map((item, index) => {
          return (
            <table key={item.id}>
            <NameItem
              item={item}
            ></NameItem>
            </table>
          );
        })}
      </table>
    </div>
  );
};

export default ShowListName;
