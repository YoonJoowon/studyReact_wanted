import styled from "styled-components";
import MainSlideCard from "./MainSlideCard";
import MainSlidePrevButton from "./MainSlidePrevButton";
import MainSlideNextButton from "./MainSlideNextButton";

// swiper 설정
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const slideCards = [
  {
    id: 1,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2014%2Fc4db989b.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 2,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2017%2F21093a9f.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 3,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2024%2F4d5d8479.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 4,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2019%2F82c49d39.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 5,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
  {
    id: 6,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1940%2F4a485a58.jpg&w=1060&q=100",
    header: "슬라이드 안에 있는 카드 제목",
    content: "슬라이드 안에 있는 카드에 적힌 내용내용내용",
  },
];

export default function MainSlide() {
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
  width: 1060px;
  height: 100%;
  position: relative;
  .button-area {
    position: absolute;
    width: 1060px;
    height: 300px;
    z-index: 10;
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
        right: -60px;
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
