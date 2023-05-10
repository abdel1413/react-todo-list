import { FaTrash } from "react-icons/fa";
function DeleteButton({ taskKey }) {
  const deletData = () => {
    let dataItem = document.querySelector(".data-items");

    let data = JSON.parse(localStorage.getItem("tasks"));
    console.log("data", data);

    let filtered = data.filter((i) => i.item !== taskKey);
    dataItem.remove();
    localStorage.setItem("tasks", JSON.stringify(filtered));
  };
  return (
    <button type="button" className="deltbtn" onClick={deletData}>
      <FaTrash />
    </button>
  );
}

export default DeleteButton;
