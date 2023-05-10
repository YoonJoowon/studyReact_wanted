import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Bookmark() {
  const number = useSelector((state) => state.number);
  return (
    <BookmarkStyle>
      <div className="wraaper">{number}</div>
    </BookmarkStyle>
  );
}

export default Bookmark;

const BookmarkStyle = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  height: 2500px;
  .wraaper {
    background-color: #eeeeee;
    width: 100%;
    height: 100%;
  }
`;
