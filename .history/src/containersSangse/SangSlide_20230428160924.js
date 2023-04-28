import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SangSlidePrevButton from "./SangSlidePrevButton";
import SangSlideNextutton from "./SangSlideNextButton";

const SlideImg = [
  {
    id: 1,
    image:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75",
  },
  {
    id: 2,
    image:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75",
  },
  {
    id: 3,
    image:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75",
  },
  {
    id: 4,
    image:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75",
  },
];

function SangSlide() {
  return (
    <StyledWrapper className="main-slide">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        className="mySwiper"
      >
        {SlideImg.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <div>
                <img src={x.image} />
              </div>
            </SwiperSlide>
          );
        })}
        <div className="button-area">
          <div className="center">
            <SangSlidePrevButton />
            <SangSlideNextutton />
          </div>
        </div>
      </Swiper>
    </StyledWrapper>
  );
}

export default SangSlide;

const StyledWrapper = styled.div`
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

  .swiper img{
    width: 700px;
    height: 504px;
  }

  .button-area {
    position: absolute;
    z-index: 1;
    top: 0px;
    display: flex;
    justify-content: center;
    .center {
      .main-slide-prev-button,
      .main-slide-next-button {
        position: absolute;
        margin: auto;
        top: 60%;
      }
      .main-slide-next-button {
        right: -0;
      }
      .main-slide-prev-button {
        left: -0;
      }
    }
  }

  .swiper-slide {
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    width: 700px;
    height: 490px;
  }
`;
