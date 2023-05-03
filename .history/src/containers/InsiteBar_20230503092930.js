import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import InsiteBarBtnPrev from "./InsiteBarBtnPrev";
import InsiteBarBtnNext from "./InsiteBarBtnNext";
import { Navigation, Pagination } from "swiper";

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

function InsiteBar() {
  return (
    <InsiteBarStyle>
      <Swiper
        navigation={true}
        spaceBetween={8}
        slidesPerView={"auto"}
        // centeredSlides={true}
        watchOverflow = {true}

        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {articles.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <button>{x.title}</button>
            </SwiperSlide>
          );
        })}
        <div className="buttonWrapper">
          <InsiteBarBtnPrev />
          <InsiteBarBtnNext />
        </div>
      </Swiper>
    </InsiteBarStyle>
  );
}

export default InsiteBar;

const InsiteBarStyle = styled.div`
  .swiper {
    width: 1060px;
    display: flex;
    overflow-x: hidden;
    overflow-Y: hidden;
    position: relative;
    .swiper-wrapper {
      width: 1060px;
      display: flex;
    }
  }

  .swiper-slide {
    display: flex;
    width: 1060px;
  }

  .swiper-slide button {
    padding: 9px 22px;
    font-weight: 700;
    font-size: 15px;
    line-height: 146.7%;
    color: #8a8a8a;
    height: 40px;
    position: relative;
    flex-shrink: 0;

    border: 1px solid #e1e2e3;
    border-radius: 30px;
    cursor: pointer;
  }

  .swiper-slide :hover{
    background-color: #a4a4a4;
  }

  .buttonWrapper {
    position: absolute;
    margin: auto;
    width: 1060px;
  }
`;
