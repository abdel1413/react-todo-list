import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import "./App.css";
import Themes from "./components/Themes";
import { FaPalette } from "react-icons/fa";

function App() {
  let [task, setTask] = useState([]);
  let [isShown, setIsShown] = useState(false);

  const AddingTask = (item) => {
    let newTask = [...task, { item }];
    // setTask(newTask);
    if (!item) {
      alert("you must enter a task");
      return;
    } else {
      //   return setTask(() => [...task, { item: t }]);

      setTask(newTask);
    }
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  useEffect(() => {
    let s = JSON.parse(localStorage.getItem("tasks"));
    if (s) {
      setTask(s);
    }
  }, []);

  const DisplayThemes = () => {
    // <ul>
    //   {themes.map((t) => {
    //     <Themes theme={t.theme} key={t.id} />;
    //   })}

    //   setIsShown(current => !current)
    setIsShown(!isShown);
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
          {task.map((data, id) => {
            return <Task task={data} id={id} key={id} />;
          })}
          {/* {<Task task={data} id={data.id} key={data.id} />} */}
        </div>
      </div>
    </div>
  );
}
export default App;
