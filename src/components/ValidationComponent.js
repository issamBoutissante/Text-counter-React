import React from "react";

export default function ValidationComponent(props) {
  return (
    <div>
      <p>{props.len < 5 ? "Text Too Short" : "Text is long enough"}</p>
    </div>
  );
}
