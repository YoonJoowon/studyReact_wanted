import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Bookmark() {
  const number = useSelector((state) => state.number);
  return <div>
    {number}
    sdfasdfasdefasdfadsf
  </div>;
}

export default Bookmark;

const BookmarkStyle = styled.div`

  background-color: red;
  width: 5000px;


`