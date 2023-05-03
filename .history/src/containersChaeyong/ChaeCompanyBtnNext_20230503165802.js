import React, { useState } from "react";
import styled from "styled-components";

function ChaeCompanyBtnNext() {
  return (
    <ChaeCompanyStyle>
      <button
        type="button"
        className="subTitleBtn1"
        aria-label="previous button"
        disabled=""
      >
        <span className="subTitleBtn1_1">
          <svg className="subTitleBtn1_2" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
    </ChaeCompanyStyle>
  );
}

export default ChaeCompanyBtnNext;

const ChaeCompanyStyle = styled.div`
  .subTitleBtn1 {
    cursor: not-allowed;
    opacity: 0.7;
    color: #ddd;
    border: 1px solid #eee;
    border-radius: 50%;
  }

  .subTitleBtn1_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn1_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }
`;
