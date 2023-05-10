import EditButton from "./EditButton";
import DeleteButton from "./DeletButton";

function Task({ task, id }) {
  return (
    <div className="data-items">
      {" "}
      <p key={id}>{task.item}</p>
      <div className="edt-delt-div">
        <EditButton taskToEdit={task.item} />
        <DeleteButton taskKey={task.item} />
      </div>
    </div>
  );
}
export default Task;
