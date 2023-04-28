import React, { useState } from "react";
import styled from "styled-components";

function InsiteBar() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "조직문화",
    },
    {
      id: 2,
      title: "회사생활",
    },
    {
      id: 3,
      title: "인간관계",
    },
    {
      id: 4,
      title: "리더십",
    },
    {
      id: 5,
      title: "IT/기술",
    },
    {
      id: 6,
      title: "취업/이직",
    },
    {
      id: 7,
      title: "커리어고민",
    },
    {
      id: 8,
      title: "라이프스타일",
    },
    {
      id: 9,
      title: "노무",
    },
  ]);

  return (
    <InsiteBarStyle>
      <div className="insitewrap_flex">
        <div className="insite_button">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <span>{articles[0].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[1].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[2].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[3].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[4].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[5].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[6].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[7].title}</span>
            </div>
            <div className="swiper-slide">
              <span>{articles[8].title}</span>
            </div>
            {/* <!-- <div className="swiper-slide"><span>데이터</span></div> -->
                    <!-- <div className="swiper-slide"><span">개발</span></div>
                    <div className="swiper-slide"><span">경영/전략</span></div>
                    <div className="swiper-slide"><span">서비스기획</span></div>
                    <div className="swiper-slide"><span">마케팅</span></div>
                    <div className="swiper-slide"><span">브랜딩</span></div>
                    <div className="swiper-slide"><span">UX/UI</span></div>
                    <div className="swiper-slide"><span">디자인</span></div>
                    <div className="swiper-slide"><span">콘텐츠 제작</span></div>
                    <div className="swiper-slide"><span">HR</span></div>
                    <div className="swiper-slide"><span">MD</span></div> --> */}
            <div className="swipter_btn1">
              <button type="button" className="swipter_btnL">
                <span className="swiperArrow">
                  <svg className="swiperArrowL" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="swipter_btn2">
              <button type="button" className="swipter_btnR">
                <span className="swiperArrow">
                  <svg className="swiperArrowR" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="btnDot">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </InsiteBarStyle>
  );
}

export default InsiteBar;

const InsiteBarStyle = styled.div`
  .insitewrap {
    align-items: center;
    height: 100%;
    display: block;
  }

  .insitewrap_flex {
    display: flex;
  }

  .insiteview {
    margin: 30px 0;
  }

  .insite_button {
    position: relative;
    display: flex;
    max-width: calc(100% - 40px - 8px);
  }

  .swiper-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1012px;
  }

  .swiper-slide {
    width: auto;
    height: 40px;
    position: relative;
  }

  .swiper-slide span {
    display: block;
    padding: 0 22px;
    border: 1px solid #e1e2e3;
    border-radius: 25px;
    color: #8a8a8a;
    font-size: 14px;
    font-weight: 600;
    line-height: 38px;
    cursor: pointer;
  }

  .swiper-slide span:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .swipter_btn1 {
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
    -ms-flex-align: center;
    align-items: center;

    z-index: 1;
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

  .swipter_btn2 {
    right: 0;
    width: 80px;
    -ms-flex-pack: end;
    justify-content: flex-end;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(21.82%, #fff),
      to(hsla(0, 0%, 100%, 0))
    );
    background: linear-gradient(270deg, #fff 21.82%, hsla(0, 0%, 100%, 0));

    display: flex;

    position: absolute;
    -ms-flex-align: center;
    align-items: center;
    z-index: 1;
  }

  .swipter_btnR {
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

  .swiperArrowR {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
  }

  .btnDot {
    min-width: 40px;
    min-height: 40px;

    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 34px;
    min-height: 34px;
    border: 1px solid #e1e2e4;
    -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #8a8a8a;
    background-color: #fff;
    outline: none;

    float: right;
    margin-left: 8px;
  }
`;
