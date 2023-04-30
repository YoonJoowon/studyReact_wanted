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

  const wrapperRef = useRef(null);

  const handleScroll = (e) => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const delta = e.deltaY;
      const currentScroll = wrapper.scrollLeft;
      const scrollWidth = wrapper.scrollWidth;
      const clientWidth = wrapper.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (delta > 0 && currentScroll < maxScroll) {
        wrapper.scrollLeft += clientWidth;
      } else if (delta < 0 && currentScroll > 0) {
        wrapper.scrollLeft -= clientWidth;
      }
    }
  };

  return (
    <SangSlideWrapper className="main-slide">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={0}
        className="mySwiper"
      >
        {SlideImg.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <div oonWheel={handleScroll} ref={wrapperRef}>
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
    </SangSlideWrapper>
  );
}

export default SangSlide;

const SangSlideWrapper = styled.div`
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 5px;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  width: 700px;
  height: 504px;
  position: relative;

  .swiper-wrapper{
    display: flex;
    
  }

  .swiper img{
    width: 700px;
    height: 499px;
    
  }

  .button-area {
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 50%;
    display: flex;
    .center {
      .main-slide-prev-button,
      .main-slide-next-button {
        position: absolute;
        margin: auto;
        top: 60%;
      }
      .main-slide-next-button {
        right: -330px;
      }
      .main-slide-prev-button {
        left: -330px;
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