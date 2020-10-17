import React from "react";

const Like = (props) => {
  let heartType = "fa fa-heart";
  if (!props.liked) heartType += "-o";
  return (
    <i
      onClick={props.onToggle}
      style={{ cursor: "pointer" }}
      className={heartType}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
