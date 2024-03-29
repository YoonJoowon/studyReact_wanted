import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SangSlidePrevButton from "./SangSlidePrevButton";
import SangSlideNextutton from "./SangSlideNextButton";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";

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
        scrollbar={{
          hide: true,
          draggable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <div>
          {SlideImg.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <div>
                  <img src={x.image} alt="" />
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
  overflow-x: hidden;
  display: flex;
  z-index: 3;
  /* overflow-y: hidden; */

  .swiper {
    width: 700px;
    height: 504px;
    position: relative;
    display: flex;
  }

  .swiper-wrapper {
    /* scroll-snap-type: x; */
    /* overscroll-behavior: contain; */
    display: flex;
  }

  .swiper img {
    width: 700px;
    height: 499px;
  }

  .button-area {
    display: flex;
    width: 700px;
    height: 490px;
    z-index: 1;

    .main-slide-prev-button,
    .main-slide-next-button {
      position: absolute;
      top: 45%;
    }
    .main-slide-next-button {
      right: 0;
      margin-right: 20px;
    }
    .main-slide-prev-button {
      left: 0;
      margin-left: 10px;
    }
  }

  .swiper-slide {
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    width: 700px;
    height: 490px;
  }

  .swiper-scrollbar {
    height: 15px;
  }
`;
