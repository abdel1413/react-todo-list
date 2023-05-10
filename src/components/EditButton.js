import { FaPenFancy } from "react-icons/fa";
function EditButton({ taskToEdit }) {
  let plusB = document.querySelector(".add-item");

  let input = document.querySelector("input");

  let check = document.querySelector(".fa-check");
  let e2 = null;
  const handleEdit = (e) => {
    input.value = taskToEdit;

    if (input.value) {
      //plusB.remove();
      plusB.style.display = "none";
      check.style.display = "block";
      if ((check.style.display = "block")) {
        check.addEventListener("click", () => {
          taskToEdit = input.value;
          if (e.target.parentNode.parentNode.className === "editbtn") {
            e.target.parentNode.parentNode.parentNode.previousSibling.innerHTML =
              input.value;
          } else if (e.target.parentNode.className === "edt-delt-div") {
            e.target.parentNode.previousSibling.innerHTML = input.value;
          }

          let newVal = [];
          let taskData = document.querySelector(".task-items").children;

          for (let d = 0; d < taskData.length; d++) {
            newVal.push({ item: taskData[d].textContent });
          }

          localStorage.setItem("tasks", JSON.stringify(newVal));
        });
      }
    }
    check.style.display = "none";
    plusB.style.display = "block";
  };

  return (
    <button type="button" className="editbtn" onClick={handleEdit}>
      {" "}
      <FaPenFancy />
    </button>
  );
}

export default EditButton;
