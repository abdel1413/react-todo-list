import { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeletButton";
import { FaPenFancy } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

function Task({ task, id, handleEdit, handleDelete }) {
  // const [task, index, editButton, deletBtn] = useState("");

  return (
    <div className="data-items">
      {" "}
      <p>{task.item}</p>
      <div className="edt-delt-div">
        {/* <EditButton onclick={() => handleEdit(id)} />
        <DeleteButton onclick={() => handleDelete(id)} /> */}
        <button
          type="button"
          onClick={handleEdit(task.item)}
          className="editbtn"
        >
          <FaPenFancy />
        </button>
        <button type="button" onClick={handleDelete(id)} className="deltbtn">
          <FaEraser />
        </button>
      </div>
    </div>
  );
}
export default Task;
