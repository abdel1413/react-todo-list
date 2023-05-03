import { FaPalette } from "react-icons/fa";
import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import Themes from "./components/Themes";

function App() {
  const [task, setTask] = useState([{ item: "text1" }]);
  const [isShown, setIsShown] = useState(false);

  const addingTask = (item) => {
    if (!item) return;
    let newtTask = [...task, { item }];
    setTask(newtTask);
  };

  const displayThemes = () => {
    // <ul>
    //   {themes.map((t) => {
    //     <Themes theme={t.theme} key={t.id} />;
    //   })}
    // </ul>

    setIsShown((current) => !current);
  };

  //remove item by  filtering out the item by id
  const handleDelete = (task) => {
    console.log(task);
  };

  //edit item
  const handleEdit = (tv) => {
    console.log("edt", tv);
  };
  return (
    <div className="todo">
      <div className="themes-container">
        <div className="themes" style={{ display: isShown ? "block" : "none" }}>
          {/* {isShown && <Themes />} */}
          <Themes />
        </div>
        <div className="palette">
          <button className="themes-icon" type="button" onClick={displayThemes}>
            <FaPalette />
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="header"> React ToDo List</h1>
        <div className="new-task-adder">
          <CreateTask addTask={addingTask} />
        </div>
        <div className="task-items">
          {task.map((t, id) => {
            return (
              <Task
                task={t}
                key={id}
                id={id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
