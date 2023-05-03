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
  .subCard1_btn {
    height: 40px;
    font-size: 15px;
    color: #36f;
    background-color: #fff;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    border: none;
    background-color: none;
    cursor: pointer;
    border: 1px solid #e1e2e3;
    padding: 12px 25.5px 11px;
    line-height: 1;
  }
`;
