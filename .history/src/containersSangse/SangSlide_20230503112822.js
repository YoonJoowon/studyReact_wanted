import React, { useRef } from "react";
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
    <SangSlideWrapper className="main-slide">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={0}
        className="mySwiper"
      >
        <div>
          {SlideImg.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <div>
                  <img src={x.image} />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        <div className="button-area">
          <SangSlidePrevButton />
          <SangSlideNextutton />
        </div>
      </Swiper>
    </SangSlideWrapper>
  );
}

export default SangSlide;

const SangSlideWrapper = styled.div`
  flex-direction: row;
  padding-bottom: 5px;
  width: 700px;
  height: 504px;
  position: relative;
  overflow-y: hidden;

  .swiper {
    width: 100%;
    height: 100%;
    scroll-snap-type: x;
    position: relative;
  }

  .swiper-wrapper {
    scroll-snap-type: x;
    /* overscroll-behavior: contain; */
  }

  .swiper img {
    width: 700px;
    height: 499px;
  }

  .button-area {
    display: flex;
    position: absolute;
    background-color: red;
    z-index: 1;
    /* position: fixed; */

    .main-slide-prev-button,
    .main-slide-next-button {
      margin: auto;
      position: absolute;
    }
    .main-slide-next-button {
    }
    .main-slide-prev-button {
    }
  }

  .swiper-slide {
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    width: 700px;
    height: 490px;
  }
`;
