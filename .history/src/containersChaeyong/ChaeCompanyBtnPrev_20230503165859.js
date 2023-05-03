import React, { useState } from "react";
import styled from "styled-components";

function ChaeCompanyBtnPrev() {
  return (
    <ChaeCompanyStyle>
      <button type="button" className="subTitleBtn2" aria-label="next button">
        <span className="subTitleBtn2_1">
          <svg className="subTitleBtn2_2" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
    </ChaeCompanyStyle>
  );
}

export default ChaeCompanyBtnPrev;

const ChaeCompanyStyle = styled.div`
  .subTitleBtn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    width: 36px;
    height: 36px;
  }

  .subTitleBtn2_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn2_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }
`;
