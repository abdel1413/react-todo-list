import { useState } from "react";
import { FaCheck, FaPenFancy } from "react-icons/fa";
function EditButton({ taskToEdit }) {
  let plusB = document.querySelector(".add-item");
  let [facheck, setFacheck] = useState(plusB);
  //let l = localStorage.getItem("tasks");

  //console.log("l", JSON.parse(l));
  //let [newValues, setNewValues] = useState(l);
  // console.log("neew", newValue);

  let input = document.querySelector("input");

  let check = document.querySelector(".fa-check");

  const handleEdit = (e) => {
    input.value = taskToEdit;

    if (input.value) {
      plusB.remove();

      check.style.display = "block";

      check.addEventListener("click", (e2) => {
        taskToEdit = input.value;

        if (e.target.parentNode.className === "edt-delt-div") {
          e.target.parentNode.previousSibling.innerHTML = input.value;
        } else if (e.target.parentNode.className === "editbtn") {
          e.target.parentNode.parentNode.previousSibling.innerHTML =
            input.value;
        }

        let newVal = [];
        let data = document.querySelector(".task-items").childNodes;

        for (let d = 0; d < data.length; d++) {
          newVal.push(data[d].textContent);
        }
        //setNewValues(newVal);
        console.log("nvv", newVal);

        //localStorage.setItem("tasks", JSON.stringify(newValue));
      });
    }
  };

  // check.style.display = "none";
  // plusB.classList.add("add-item");

  return (
    <button type="button" className="editbtn" onClick={handleEdit}>
      {" "}
      <FaPenFancy />
    </button>
  );
}

export default EditButton;
