import React, { useState } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

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
    {
      id: 10,
      title: "개발",
    },
    {
      id: 11,
      title: "경영/전략",
    },
    {
      id: 12,
      title: "서비스기획",
    },
    {
      id: 13,
      title: "마케팅",
    },
    {
      id: 14,
      title: "브랜드",
    },
    {
      id: 15,
      title: "UX/UI",
    },
    {
      id: 16,
      title: "디자인",
    },
    {
      id: 17,
      title: "콘텐츠제작",
    },
    {
      id: 18,
      title: "HR",
    },
    {
      id: 19,
      title: "MD",
    },
  ]);

  return (
    <InsiteBarStyle>
      <div className="insitewrap_flex">
        <div className="insite_button">
          <div className="swiper-wrapper">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={24}
            >
              {articles.map((x) => {
                return (
                  <SwiperSlide>
                    <div src={x.title} alt=""></div>
                  </SwiperSlide>
                );
              })}
              <div className="button-area">
                <div className="center">
                  {/* <MainSlidePrevButton />
                  <MainSlideNextButton /> */}
                </div>
              </div>
            </Swiper>
          </div>
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
