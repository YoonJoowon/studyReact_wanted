import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Bookmark() {
  const number = useSelector((state) => state.number);
  return(
  <BookmarkStyle>
    <div>
      {number}
      sdfasdfasdefasdfadsf
    </div>
    ;
  </BookmarkStyle>
  )
}

export default Bookmark;

const BookmarkStyle = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
`;
