import { FaPenFancy } from "react-icons/fa";
function EditButton({ taskToEdit }) {
  const handleEdit = () => {
    let edit = document.querySelector(".data-items");

    console.log("handleEdit", edit.firstChild._reactProps$v7yayo);
  };

  return (
    <button type="button" className="editbtn" onClick={handleEdit}>
      {" "}
      <FaPenFancy />
    </button>
  );
}

export default EditButton;
