import { FaEraser } from "react-icons/fa";
function DeleteButton() {
  const deletData = ({ id }) => {
    console.log(id);
  };
  return (
    <button type="button" className="deltbtn" onClick={() => deletData}>
      <FaEraser />
    </button>
  );
}

export default DeleteButton;
