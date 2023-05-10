import React from "react";
import { useSelector } from "react-redux";

function Bookmark() {
  const number = useSelector((state) => state.number);
  return <div>
    {number}
  </div>;
}

export default Bookmark;
