import React, { useState } from "react";

function DeleteAll(props) {
  let [deleted, setDeleted] = useState(props);
  let deletedAll = props.onclick;
  console.log(deletedAll);
  //return setDeleted('')
}
export default DeleteAll;
