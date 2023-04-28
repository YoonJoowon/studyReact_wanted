import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

const slideCards = [
  {
    id: 1,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 2,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 3,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 4,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 5,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 6,
    imgSrc: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1991%2Fd44d240d.jpg&w=1060&q=100",
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
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
                  <a href="">
                    <img src={x.imgSrc} alt="" />
                  </a>
                  <MainSlideCard header={x.header} content={x.content} />
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <div className="button-area">
  
          <div className="center">
            <MainSlidePrevButton />
            <MainSlideNextButton />
          </div>
    
        </div>
      </Swiper>
    </StyledWrapper>
    </section>
    </article>
    </div>
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

//   /* 이전 버튼 */
// }
// <button type="button" className="swiper-button-prev">
//   <svg className="" viewBox="0 0 18 18">
//     <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
//   </svg>
// </button>;

// {
//   /* 다음 버튼 */
// }
// <button type="button" className="swiper-button-next">
//   <svg className="" viewBox="0 0 18 18">
//     <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
//   </svg>
// </button>;

export default Slide;