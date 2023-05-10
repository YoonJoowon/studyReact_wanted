import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Bookmark() {
  const selectedText = useSelector((state) => state.selectedText);

  if (!selectedText) {
    return null;
  }
  return (
    <BookmarkStyle>
      <div></div>
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
    background-color: #fafafa;
    width: 100%;
    height: 100%;
  }
`;
