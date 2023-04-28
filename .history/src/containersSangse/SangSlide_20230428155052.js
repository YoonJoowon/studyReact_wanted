import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import MainSlidePrevButton from "../components/MainSlidePrevButton";
import MainSlideNextButton from "../components/MainSlideNextButton";
import Swiper from "swiper";

const Slide = useState[
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
        loop={true}
        centeredSlides={true}
        spaceBetween={24}
        className="mySwiper"
      >
        {articles.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <div>
                <img src={x.imgSrc} />
              </div>
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
  );
}

export default SangSlide;

const StyledWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 5px;
  margin: auto;
  width: 1060px;
  height: 100%;
  position: relative;
  .button-area {
    position: absolute;
    height: 300px;
    z-index: 1;
    top: 0px;
    display: flex;
    justify-content: center;
    .center {
      .main-slide-prev-button,
      .main-slide-next-button {
        position: absolute;
        top: 50%;
      }
      .main-slide-next-button {
        right: -1120px;
      }
      .main-slide-prev-button {
        left: -60px;
      }
    }
  }

  .swiper-slide {
    width: 1060px;
    height: 300px;
    margin: auto;

    .active {
      .main-slide-card {
        opacity: 100;
      }
    }
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
      border-radius: 10px;
    }
  }
`;
