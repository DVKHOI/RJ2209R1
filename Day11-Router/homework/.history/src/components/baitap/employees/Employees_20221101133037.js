import React from "react";
import { useNavigate } from "react-router-dom";
const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20,
  },
  {
    id: 2,
    name: "Khánh",
    age: 25,
  },
  {
    id: 3,
    name: "Tú",
    age: 22,
  },
];
const Employees = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/employeesDetail", {
      state: {
        employeesID: employees.name,
        employeesName: employees.name,
        employeesAge: employees.age,
      },
    });
  };

  return (
    <div className="overflow-x-auto relative w-full max-w-[500px] mx-auto mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{employee.id}</td>
              <td className="px-6 py-4">{employee.name}</td>
              <td className="px-6 py-4">{employee.age}</td>
              <td className="px-6 py-4">
                <button
                  className="w-full max-w-[70px] text-white bg-purple-500 p-2 rounded-md mt-2 mr-2"
                  onClick={(e) => handleSubmit(e)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="p-1 mt-3 w-[100px] border border-none bg-blue-500 rounded-lg"
        onClick={(e) => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Employees;
