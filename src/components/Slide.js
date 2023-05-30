import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

const slideCards = [
  {
    id: 1,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 2,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 3,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 4,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 5,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 6,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1991%2Fd44d240d.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
];

function Slide() {
  return (
    <section className="main1">
      <article className="slide">
        <div className="slideImg">
          <StyledWrapper className="main-slide">
            <SwiperSlide
              // loop={true}
              // centeredSlides={true}
              // spaceBetween={24}
              // modules={[Autoplay]}
              // slidesPerView={"auto"}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              className="mySwiper"
            >
              {slideCards.map((x) => {
                return (
                  <SwiperSlide key={x.id}>
                    {({ isActive }) => (
                      <div
                        className={`img-container ${
                          isActive ? "active" : "not-active"
                        }`}
                      >
                        <img src={x.imgSrc} alt="" />
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
              <div className="button-area">
                <div className="center"></div>
              </div>
            </SwiperSlide>
          </StyledWrapper>
        </div>
      </article>
    </section>
  );
}

const StyledWrapper = styled.div`
  padding-top: 75px;
  margin-bottom: 5px;
  width: 100%;
  height: 100%;
  .button-area {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    .center {
      width: 1060px;
      position: relative;
      .main-slide-prev-button,
      .main-slide-next-button {
        position: absolute;
        top: 40%;
      }
      .main-slide-next-button {
        right: -80px;
      }
      .main-slide-prev-button {
        left: -80px;
      }
    }
  }

  .swiper-slide {
    width: 1060px;
    height: 300px;

    .active {
      .main-slide-card {
        opacity: 100;
      }
    }
    .active::before {
    }
  }
  .test {
    width: 100%;
    height: 300px;
    background-color: red;
  }

  .img-container {
    width: 1060px;
    height: 300px;
    a {
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;

export default Slide;
