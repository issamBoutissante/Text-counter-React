import React from "react";

export default function charComponent(props) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: 16,
        textAlign: "center",
        margin: 16,
        border: "1px solid black",
      }}
      onClick={props.delete}
    >
      {props.char}
    </div>
  );
}
