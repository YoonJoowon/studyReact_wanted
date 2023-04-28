import React, { useState } from "react";
import CloseX from "./CloseX";

function InsiteBar2() {
  return (
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
        <div classNameName="main3_2">
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
  );
}

export default InsiteBar2;
