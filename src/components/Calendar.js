import React from "react";

export default function Calendar(props) {
  return (
    <button onClick={() => props.setDate("2020-01-08")}>
      Date: 2020/01/08
    </button>
  );
}
