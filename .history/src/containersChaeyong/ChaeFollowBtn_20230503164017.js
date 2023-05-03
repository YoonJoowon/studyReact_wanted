import React, { useState } from "react";
import styled from "styled-components";

function ChaeFollowBtn() {
  return (
    <ChaeCompanyStyle>
      <button className="subCard1_btn" type="button">
        <p>팔로우</p>
      </button>
    </ChaeCompanyStyle>
  );
}

export default ChaeFollowBtn;

const ChaeCompanyStyle = styled.div`
  .subTitle button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    font-size: 16px;
  }
`;
