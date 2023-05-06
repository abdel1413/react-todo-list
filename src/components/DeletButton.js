import { FaEraser } from "react-icons/fa";
function DeleteButton({ taskKey }) {
  const deletData = () => {
    let dataItem = document.querySelector(".data-items");
    console.log("data items", dataItem);
    let data = JSON.parse(localStorage.getItem("tasks"));
    console.log("local", data);
    console.log("this is task to delete", taskKey);
    let filtered = data.filter((i) => i.item !== taskKey);
    dataItem.remove();

    localStorage.setItem("tasks", JSON.stringify(filtered));
  };
  return (
    <button type="button" className="deltbtn" onClick={deletData}>
      <FaEraser />
    </button>
  );
}

export default DeleteButton;
