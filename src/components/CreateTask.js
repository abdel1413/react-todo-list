import { useState } from "react";
import "./CreateTask.css";

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    console.log("v", value);
    setValue("");
  };

  const AddingTask = () => {
    addTask(value);
    setValue("");
  };

  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  const deletAll = () => {
    document.getElementsByClassName("task-items")[0].innerHTML = "";
    localStorage.clear();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="inputtext"
            onChange={handleChanges}
            placeholder="Add a todo..."
            value={value}
          />
          <button className="add-item" type="button" onClick={AddingTask}>
            {" "}
            +
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
