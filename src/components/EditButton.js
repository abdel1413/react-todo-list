import { FaCheck, FaPenFancy } from "react-icons/fa";
function EditButton({ taskToEdit }) {
  let input = document.querySelector("input");
  let plusB = document.querySelector(".add-item");
  const handleEdit = (e) => {
    console.log("plus", plusB.innerHTML);
    console.log("input", input);
    console.log("task to edi", taskToEdit);
    input.value = taskToEdit;
    // plusB.innerHTML = "";
    // plusB.classList.add(<FaCheck />);

    plusB.addEventListener("click", () => {
      if (e.target.parentNode.className === "edt-delt-div") {
        e.target.parentNode.previousSibling.innerHTML = input.value;
      } else if (e.target.parentNode.className === "editbtn") {
        e.target.parentNode.parentNode.previousSibling.innerHTML = input.value;
      }
    });

    let newValue = [];
    let dataItems = document.querySelector(".task-items").childNodes;
    console.log("data", dataItems);
    for (let v = 0; v < dataItems.length; v++) {
      newValue.push(dataItems[v].innerHTML);
    }
    localStorage.setItem("tasks", JSON.stringify(newValue));
  };

  return (
    <button type="button" className="editbtn" onClick={handleEdit}>
      {" "}
      <FaPenFancy />
    </button>
  );
}

export default EditButton;
