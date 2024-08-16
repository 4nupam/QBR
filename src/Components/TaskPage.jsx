import React, { useState, useEffect } from "react";

const TaskPage = () => {
  const [data, setData] = useState("");
  const [submitted, setIsSubmitted] = useState(false);
  const [list, setList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setList(storedTasks);

    const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setCompletedTasks(storedCompletedTasks);
  }, []);

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  const handleEdit = (index) => {
    const taskToEdit = list[index];
    setData(taskToEdit);
    handleDelete(index);
  };

  const handleComplete = (index) => {
    const taskToComplete = list[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    handleDelete(index);
    localStorage.setItem("completedTasks", JSON.stringify([...completedTasks, taskToComplete]));
  };

  const handleInput = (e) => {
    setData(e.target.value);
  };

  const handleSetting = (e, index) => {
    setSelect(e.target.value);
    if (e.target.value === "edit") {
      handleEdit(index);
    } else if (e.target.value === "completed") {
      handleComplete(index);
    } else if (e.target.value === "delete") {
      handleDelete(index);
    }
  };

  const handleSubmit = () => {
    if (!data.trim()) {
      setIsSubmitted(false);
      return;
    }

    if (list.includes(data)) {
      alert("Task already exists!");
      return;
    }

    const newList = [...list, data];
    setList(newList);
    localStorage.setItem("tasks", JSON.stringify(newList));
    setData("");
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-blue-600 ml-4 dark:text-white">
        Future Tasks
      </span>
      <div className="input_field flex items-center gap-2 ml-4 w-full">
        <input
          type="text"
          value={data}
          placeholder="Enter the Future Task"
          onChange={handleInput}
          className="p-2 w-4/5 bg-transparent border-b-2 outline-none text-blue-700 dark:text-white"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 p-2 rounded-lg font-semibold dark:bg-white"
        >
          Submit
        </button>
      </div>
      {!submitted && (
        <span className="text-red-600 font-bold w-full text-center">
          Fill the Input Fields
        </span>
      )}
      {list.length > 0 ? (
        <ul className="ml-4 list-disc">
          {list.map((task, index) => (
            <li
              key={index}
              className="text-blue-600 list-none dark:text-white flex items-center flex-1 gap-2"
            >
              <span className="text-xl font-bold">
                {index + 1}. {task}
              </span>

              <div className="flex flex-1 gap-4 items-center">
                <select
                  name="actions"
                  id="actions"
                  onChange={(e) => handleSetting(e, index)}
                  className="outline-none p-2 bg-transparent border-b-2"
                >
                  <option value="">Select Action</option>
                  <option value="edit">Edit</option>
                  <option value="completed">Completed</option>
                  <option value="delete">Delete</option>
                </select>
                <button
                  type="button"
                  className="bg-blue-600 p-2 text-black rounded-lg font-semibold dark:bg-white"
                  onClick={() => handleSetting({ target: { value: select } }, index)}
                >
                  Save
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-xl text-blue-600 w-full text-center">
          No Tasks Now
        </span>
      )}
      <div className="flex flex-col">
        <span className="font-bold text-blue-600 ml-4 dark:text-white">
          Completed Tasks
        </span>
        {completedTasks.length > 0 ? (
          <ul className="ml-4 list-disc">
            {completedTasks.map((task, index) => (
              <li
                key={index}
                className="text-green-600 list-none dark:text-green-400 flex items-center flex-1 gap-2"
              >
                <span className="text-xl font-bold">
                  {index + 1}. {task}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-xl text-blue-600 w-full text-center">
            No Completed Tasks Yet
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
