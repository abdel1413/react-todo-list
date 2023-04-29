import React, { useState } from "react";

function InputSection(e) {
  const [data, setData] = useState("");

  const handleChanges = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Todo List</h1>

      <input type="text" onChange={handleChanges} value={data} />
      <button type="button">+</button>
      <br />
      <button type="button">Delet All</button>
    </form>
  );
}

export default InputSection;
