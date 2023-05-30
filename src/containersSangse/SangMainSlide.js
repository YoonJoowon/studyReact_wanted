import React from "react";
import SangSide from "./SangSide";
import SangSlide from "./SangSlide";
import styled from "styled-components";

function SangMainSlide() {
  return (
    <SangMainSlideStyle>
      <div>
        <section className="section1">
          <SangSlide />
          <SangSide />
        </section>

        <section className="section2">
          <div className="section2_txt">
            <h2 className="section2_react">웹 프론트엔드 개발자(React)</h2>

            <div className="section2_top">
              <h6 className="section2_text1">블루비커</h6>
              <div className="">
                <button className="" type="button">
                  <div className="section2_high">응답률 매우 높음</div>
                </button>
              </div>
              <span className="section2_korea">서울 한국</span>
            </div>
            <div className="section2_people">
              <ul>
                <li>#인원급성장</li>
                <li>#50명이하</li>
                <li>#설립3년이하</li>
                <li>#스톡옵션</li>
                <li>#워크샵</li>
                <li>#간식</li>
                <li>#원격근무</li>
                <li>#건강검진</li>
                <li>#IT, 컨텐츠</li>
              </ul>
              <div className=""></div>
            </div>
          </div>
        </section>
      </div>
    </SangMainSlideStyle>
  );
}

export default SangMainSlide;

const SangMainSlideStyle = styled.div`
  /* section1 */
  .section1 {
    display: flex;
    width: 1060px;
    margin: auto;
    margin-top: 70px;
  }

  .section1_btn {
    position: absolute;
    width: 700px;
    margin-top: 230px;
  }

  .section1 .section1_btn_left {
    position: absolute;
    width: 9%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
  }

  .section1 .section1_btn_left svg {
    display: block;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .section1 .section1_btn_right {
    position: absolute;
    width: 9%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    right: 0;
  }

  .section1 .section1_btn_right svg {
    display: block;
  }

  .section1 .section1_img00 {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    overscroll-behavior: contain;
    width: 700px;
    height: 504px;
  }

  .section1 .section1_img00_1 {
    position: relative;
    height: 490px;
    flex-shrink: 0;
    display: flex;

    transition: transform 0.5s;
  }

  .section1 .section1_img00 img {
    border-radius: 4px;
    scroll-snap-align: start;

    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    width: 700px;
    height: 490px;
  }

  /* main */
  .main_main {
    width: 1060px;
    height: 100%;
    margin: auto;
    position: relative;
  }

  /* section2 */
  .section2 {
    color: #333;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 30px;
    word-break: keep-all;
    word-wrap: break-word;
    width: calc(100% - 360px);
  }

  .section2_txt {
    width: 700px;
    margin: auto;
  }

  .section2 .section2_react {
    margin-top: 40px;
  }

  .section2 .section2_top {
    display: flex;
    margin-top: 20px;
    width: 700px;
    height: 22px;

    display: flex;
    align-items: center;
  }

  .section2 .section2_text1 {
    color: #333;
    position: relative;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: auto;
    line-height: 1.4;

    font-size: 13px;
    font-weight: 600;
  }

  .section2 .section2_high {
    border: 1px solid #00aead;
    color: #00aead;
    width: 100%;
    height: 19px;
    font-size: 11px;
    align-items: center;

    margin: 0px;
  }

  .section2 {
  }

  .section2 .section2_korea {
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    color: #999;
    font-size: 13px;
  }

  .section2 .section2_people {
    margin-top: 15px;
  }

  .section2 .section2_people ul {
    width: 700px;
  }

  .section2 .section2_people li {
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 10px;
    padding: 9px 14px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #333;
    background-color: #f3f5f8;
    border-radius: 25px;
  }
`;
