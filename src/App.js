import React, { useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import "./App.css";
import Themes from "./components/Themes";
import { FaPalette } from "react-icons/fa";

function App() {
  let [task, setTask] = useState([{ item: "text1" }]);
  let [isShown, setIsShown] = useState(false);

  const AddingTask = (t) => {
    setTask(() => [...task, { item: t }]);
  };

  localStorage.setItem("tasks", JSON.stringify(task));

  let storedData = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const DisplayThemes = () => {
    // <ul>
    //   {themes.map((t) => {
    //     <Themes theme={t.theme} key={t.id} />;
    //   })}

    setIsShown((currentState) => !currentState);
  };
  return (
    <div className="todo">
      <div className="themes-container">
        <div className="themes" style={{ display: isShown ? "block" : "none" }}>
          {/* {isShown && <Themes />} */}
          <Themes />
        </div>
        <div className="palette">
          <button className="themes-icon" type="button" onClick={DisplayThemes}>
            <FaPalette />
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="header"> React Todo List</h1>
        <div className="new-task-adder">
          <CreateTask addTask={AddingTask} />
        </div>
        <div className="task-items">
          {storedData.map((data, id) => {
            return <Task task={data} id={id} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
