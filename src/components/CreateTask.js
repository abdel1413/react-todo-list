import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import AlertDeleted from "./AlertDataDeleted";
import AlertText from "./AlertText";

import "./CreateTask.css";

function CreateTask({ addTask, editTask }) {
  const [value, setValue] = useState("");

  const alert = document.querySelector(".alert-msg");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    // console.log("v", value);
    setValue("");
  };

  const AddingTask = () => {
    if (!value) {
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
      }, 2000);

      return;
    }
    // {!value && <AlertText />};
    let successMsg = document.querySelector(".alert-success-msg");
    let editbtn = document.querySelector(".editbtn");
    console.log("e", editbtn);
    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 2000);

    addTask(value);

    setValue("");
  };

  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  const EditTask = () => {
    console.log("editing task");
    editTask(value);
  };
  const deletAll = () => {
    let clearAll = document.getElementsByClassName("task-items")[0];

    clearAll.innerHTML = "";
    console.log("loc", JSON.parse(localStorage.getItem("tasks")));

    alert.innerHTML = "All tasks cleared successfully";
    alert.style.display = "block";
    alert.style.backgroundColor = "#67D49B";
    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);
    localStorage.clear();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="alert-msg" style={{ display: "none" }}>
            You have to enter a task
          </div>
          <div className="alert-success-msg" style={{ display: "none" }}>
            Task added successfully
          </div>

          <AlertDeleted />
          <input
            type="text"
            name="inputtext"
            onChange={handleChanges}
            placeholder="Add a todo..."
            value={value}
          />
          <button
            className="add-item fa-add"
            type="button"
            onClick={AddingTask}
            style={{ display: "block" }}
          >
            {" "}
            +
          </button>
          <button
            className="add-item fa-check"
            type="button"
            style={{ display: "none" }}
            onClick={EditTask}
          >
            <FaCheck className="fa-check" />
          </button>
        </div>
      </form>

      <button className="delete-all" type="button" onClick={deletAll}>
        Delete All
      </button>
    </>
  );
}
export default CreateTask;

//
// Todo.js

// [...]

function Task({ task, index, completeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

// File: Todo.js

// [...]

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

// [...]
