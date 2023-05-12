import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import "./App.css";
import Themes from "./components/Themes";
import { FaPalette } from "react-icons/fa";
import AlertText from "./components/AlertText";

let th = [
  { id: 1, theme: "cupcake" },
  { id: 2, theme: "dark" },
  { id: 3, theme: "light" },
  { id: 4, theme: "bumblebee" },
  { id: 5, theme: "synthwave" },
  { id: 6, theme: " halloween" },
  { id: 7, theme: "fantasy" },
  { id: 8, theme: "dracula" },
  { id: 9, theme: "aqua" },
  { id: 10, theme: "luxury" },
  { id: 11, theme: "night" },
];

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

    // console.log("new task", newTask);
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
      <div className="author-text">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/abdel1413/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <b>Aboulaye Tchakoura</b>{" "}
          </a>
        </p>
      </div>
      <div className="themes-container">
        <div className="themes" style={{ display: isShown ? "block" : "none" }}>
          {/* {isShown && <Themes />} */}
          <Themes themes={th} />
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
