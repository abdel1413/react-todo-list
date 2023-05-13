import { useState } from "react";
import { FaPenFancy } from "react-icons/fa";
function EditButton({ taskToEdit }) {
  let plusB = document.querySelector(".add-item");
  let input = document.querySelector("input");
  let check = document.querySelector(".fa-check");
  let alert = document.querySelector(".alert-msg");

  const handleEdit = (e) => {
    input.value = taskToEdit;

    if (input.value && e) {
      //plusB.remove();
      plusB.style.display = "none";
      //check.style.display = "block";
      if ((check.style.display = "block")) {
        check.addEventListener("click", () => {
          //taskToEdit = input.value;

          console.log("class1", e.target.parentNode.parentNode.className);
          console.log("class 2", e.target.parentNode.className);
          if (e.target.parentNode.parentNode.className === "editbtn") {
            e.target.parentNode.parentNode.parentNode.previousSibling.innerHTML =
              input.value;
          } else if (e.target.parentNode.className === "edt-delt-div") {
            e.target.parentNode.previousSibling.innerHTML = input.value;
          }

          let newVal = [];
          let taskData = document.querySelector(".task-items").childNodes;

          for (let d = 0; d < taskData.length; d++) {
            newVal.push({ item: taskData[d].textContent });
          }

          localStorage.setItem("tasks", JSON.stringify(newVal));

          alert.style.display = "block";
          alert.innerHTML = "Task edited successfully";
          alert.style.background = "#67D49B";
          setTimeout(() => {
            alert.style.display = "none";
          }, 2000);
        });
      }
    }
  };

  return (
    <button
      type="button"
      className="editbtn"
      onClick={(e) => {
        handleEdit(e);
      }}
    >
      {" "}
      <FaPenFancy />
    </button>
  );
}

export default EditButton;
