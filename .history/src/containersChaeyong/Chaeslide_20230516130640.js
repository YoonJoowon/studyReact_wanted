import styled from "styled-components";
import MainSlideCard from "../components/MainSlideCard";
import MainSlidePrevButton from "../components/MainSlidePrevButton";
import MainSlideNextButton from "../components/MainSlideNextButton";
import data from "./ChaeSlide.json";

// swiper 설정
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useState } from "react";

export default function ChaeSlide() {

  const [slideCards, setslideCards] = useState(data);

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
        </div>
      </article>
    </section>
  );
}

const StyledWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 5px;
  margin: auto;
  margin-top: 50px;
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

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    width: 1060px;
    height: 300px;
    margin: auto;
    position: relative;

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