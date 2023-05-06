import { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeletButton";
import { FaPenFancy } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

function Task({ task, id }) {
  // const [task, index, editButton, deletBtn] = useState("");

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
