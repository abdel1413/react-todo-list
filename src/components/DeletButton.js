import { FaTrash } from "react-icons/fa";
function DeleteButton({ taskKey }) {
  const deletData = () => {
    let dataItem = document.querySelector(".data-items");
    let data = JSON.parse(localStorage.getItem("tasks"));
    let filtered = data.filter((i) => i.item !== taskKey);
    dataItem.remove();
    localStorage.setItem("tasks", JSON.stringify(filtered));
    let s = document.querySelector(".alert-msg");

    s.textContent = "Data deleted successfully";
    console.log("stya", s);
    s.style.backgroundColor = "#67D49B";
    s.style.display = "block";
    setTimeout(() => {
      s.style.display = "none";
    }, 2000);
  };
  return (
    <button type="button" className="deltbtn" onClick={deletData}>
      <FaTrash />
    </button>
  );
}

export default DeleteButton;
