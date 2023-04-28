import React, { useState } from "react";
import styled from "styled-components";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import InsiteBarBtnPrev from "./InsiteBarBtnPrev";
import InsiteBarBtnNext from "./InsiteBarBtnNext";

function InsiteBar() {
  const articles = =[
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
              spaceBetween={0}
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
                  <InsiteBarBtnPrev/>
                  <InsiteBarBtnNext/>
                  
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
