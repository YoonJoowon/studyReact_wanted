import React, { useState } from "react";
// import CloseX from "../components/CloseX";

function InsiteBar2() {
  return (
    <section>
      <div class="main3">
        <div class="maint3_container">
          <div class="main3_img">
            <div class="main3_img_txt">
              <div class="main3_img_txt1">내 유형과 가장 어울리는 회사는?</div>
              <div class="main3_img_txt2">
                유형테스트 하러가기
                <span class="TypeTestBannerRow_ArrowContainer__YwMY_">
                  <span class="SvgIcon_SvgIcon__root__8vwon">
                    <svg
                      class="SvgIcon_SvgIcon__root__svg__DKYBi"
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

      <div className="main3_2">
        <div class="banner_line">
          <hr class="banner_line_line"></hr>
        </div>
        <div>
          <div class="banner00">
            <div class="banner00_container">
              <div class="banner00_txt1">
                즐겨보는 크리에이터의 글도 추천하고 싶다면?
              </div>

              <div class="banner00_txt2">
                크리에이터 추천하기{" "}
                <svg
                  class="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </div>

            <div>
              <img
                class="banner00_img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90"
                alt="크리에이터 추천하기"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>

        <div class="banner">
          <p>
            직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
            <em class="LineBanner_LineBanner__emoji__69eEU">👀</em>
            <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </p>
        </div>

        <button type="button" class="banner00_btn">
          <span class="banner00_btn1">
            <svg class="banner00_btn_img" viewBox="0 0 24 24">
              <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default InsiteBar2;
