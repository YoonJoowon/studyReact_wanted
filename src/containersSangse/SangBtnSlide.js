import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SangBtnSlide() {
  return (
    <div className="section1_btn">
      <button type="button" className="section1_btn_left">
        <svg width="24" height="24" viewBox="0 0 12 12">
          <path
            fill="#b5b5b5"
            d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
          ></path>
        </svg>
      </button>

      <button type="button" className="section1_btn_right">
        <svg width="24" height="24" viewBox="0 0 12 12">
          <path
            fill="#b5b5b5"
            d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SangBtnSlide;
