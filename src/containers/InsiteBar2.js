import React, { useState } from "react";
import CloseX from "./CloseX";
import styled from "styled-components";

function InsiteBar2() {
  return (
    <InsiteBar2Style>
      <section>
        <div className="main3">
          <div className="maint3_container">
            <div className="main3_img">
              <div className="main3_img_txt">
                <div className="main3_img_txt1">
                  내 유형과 가장 어울리는 회사는?
                </div>
                <div className="main3_img_txt2">
                  유형테스트 하러가기
                  <span className="TypeTestBannerRow_ArrowContainer__YwMY_">
                    <span className="SvgIcon_SvgIcon__root__8vwon">
                      <svg
                        className="SvgIcon_SvgIcon__root__svg__DKYBi"
                        viewBox="0 0 18 18"
                      >
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="main3_2">
            <CloseX></CloseX>
          </div>

          <div className="banner_line">
            <hr className="banner_line_line"></hr>
          </div>

          <div className="banner">
            <p>
              직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
              <em className="LineBanner_LineBanner__emoji__69eEU">👀</em>
              <svg
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 18 18"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </p>
          </div>

          <button type="button" className="banner00_btn">
            <span className="banner00_btn1">
              <svg className="banner00_btn_img" viewBox="0 0 24 24">
                <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
              </svg>
            </span>
          </button>
        </div>
      </section>
    </InsiteBar2Style>
  );
}

export default InsiteBar2;

const InsiteBar2Style = styled.div`
  /* main3 */

  .main3 {
    width: 1060px;
    margin: auto;
  }

  .maint3_container {
    margin: auto;
  }

  .main3_img {
    width: 1060px;
    height: 108px;
    margin-top: 60px;
    margin-bottom: 60px;

    cursor: pointer;
    background: #0d99ff;
    color: #fff;
    border-radius: 10px;
    background-image: url(https://static.wanted.co.kr/images/type-test/typetest-banner-image.png);
    background-size: auto 100%;
    background-position: 100%;
    background-repeat: no-repeat;

    position: relative;
  }

  .main3_img_txt {
    position: absolute;
    margin-top: 25px;
    margin-left: 100px;
  }

  .main3_img_txt1 {
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
  }

  .main3_img_txt2 {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.0056em;
    height: 32px;
  }

  .main3_img_txt2 svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;

    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;

    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  .banner_line {
    opacity: 0.2;
    width: 1060px;
    margin: auto;
    margin-top: 120px;
  }

  /* banner */

  .main3_2 {
    margin-top: 120px;
  }

  .banner {
    width: 1000px;
    height: 40px;
    background-image: linear-gradient(
      90deg,
      #01a9fe -12%,
      #2f5fef 37%,
      #046afe 72%,
      #00d2dd 110%
    );
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    border-radius: 38.5px;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .banner p {
    padding: 21px 30px;
    font-size: 18px;
    line-height: normal;
  }

  .banner svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }
`;
