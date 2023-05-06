import { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeletButton";
import { FaPenFancy } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

function Task({ task, id }) {
  // const [task, index, editButton, deletBtn] = useState("");
  // console.log("t", task);

  // console.log("key", id);

  const handleEdit = () => {
    console.log("editdddd", task.id);
  };
  const handleDelete = (id) => {
    // console.log("handle delete", id);
    // let data = localStorage.getItem("tasks");
    // console.log(data);
    // const filtered = data.filter((i) => i !== id);
    // console.log("filtered", filtered);
  };

  return (
    <div className="data-items">
      {" "}
      <p key={id}>{task.item}</p>
      <div className="edt-delt-div">
        <EditButton taskToEdit={task.item} />
        <DeleteButton taskKey={task.item} />
        {/* <button
          type="button"
          onClick={handleEdit(task.item)}
          className="editbtn"
        >
          <FaPenFancy />
        </button> */}

        {/* <button type="button" onClick={handleDelete(id)} className="deltbtn">
          <FaEraser />
        </button> */}
      </div>
    </div>
  );
}
export default Task;
