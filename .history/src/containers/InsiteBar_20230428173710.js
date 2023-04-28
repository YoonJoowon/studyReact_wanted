import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import InsiteBarBtnPrev from "./InsiteBarBtnPrev";
import InsiteBarBtnNext from "./InsiteBarBtnNext";

function InsiteBar() {
  const articles = [
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
  ];

  return (
    <InsiteBarStyle>
      <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={0}>
        {articles.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <button>
                <div src={x.title} alt=""></div>
              </button>
            </SwiperSlide>
          );
        })}
        <div className="buttonWrapper">
          <div className="center">
            <InsiteBarBtnPrev />
            <InsiteBarBtnNext />
          </div>
        </div>
      </Swiper>
    </InsiteBarStyle>
  );
}

export default InsiteBar;

const InsiteBarStyle = styled.div`
  .swiper {
    width: 1060px;
    background-color: blue;
    position: relative;
    .swiper-wrapper {
      width: 1060px;
      background-color: red;
      position: relative;
    }
  }
`;
