import React, { useState } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

function InsiteBarBtnNext() {

  const swiper = useSwiper();

  return (
    <InsiteBarBtnNextStyle>
      <div className="swipter_btn1">
        <button onClick={() => swiper.slidePrev()} className="swipter_btnL">
          <span className="swiperArrow">
            <svg className="swiperArrowL" viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </InsiteBarBtnNextStyle>
  );
}

export default InsiteBarBtnNext;

const InsiteBarBtnNextStyle = styled.div`
  .sc-jItqcz {
    left: 0;
    width: 80px;
    -ms-flex-pack: start;
    justify-content: flex-start;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(21.82%, #fff),
      to(hsla(0, 0%, 100%, 0))
    );
    background: linear-gradient(90deg, #fff 21.82%, hsla(0, 0%, 100%, 0));

    display: flex;

    position: absolute;
    align-items: center;
    z-index: 2;
  }

  .swipter_btnL {
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    color: #8a8a8a;
    position: relative;
  }

  .swiperArrow {
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
  }

  .swiperArrowL {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
  }
`;
