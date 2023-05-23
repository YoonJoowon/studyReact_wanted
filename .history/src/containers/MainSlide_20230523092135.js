import styled from "styled-components";
import MainSlideCard from "../components/MainSlideCard";
import MainSlidePrevButton from "../components/MainSlidePrevButton";
import MainSlideNextButton from "../components/MainSlideNextButton";

// swiper 설정
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function MainSlide() {
  return (
    <StyledWrapper className="main-slide">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={24}
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
  );
}

const slideCards = [
  {
    id: 1,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2014%2Fc4db989b.jpg&w=1060&q=100",
    header: "이제 면접 준비도 챗GPT로!",
    content: "말 잘하는 기획자로 거듭나기",
  },
  {
    id: 2,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2017%2F21093a9f.jpg&w=1060&q=100",
    header: "우리 회사를 소개합니다!",
    content: "회사에 대한 정보 원티드가 찾아드릴게요!",
  },
  {
    id: 3,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2024%2F4d5d8479.jpg&w=1060&q=100",
    header: "원티드 PO들은 어떻게 일할까?",
    content: "경력직 PO들의 프라이빗 비결",
  },
  {
    id: 4,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2019%2F82c49d39.jpg&w=1060&q=100",
    header: "원티드 ARTICLE 살롱",
    content: "당첨자가 되면 원티드에서 400만원을 드립니다!",
  },
  {
    id: 5,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100",
    header: "스타트업 CEO 살롱!",
    content: "콘텐츠 업계 현직자들의 모임!",
  },
  {
    id: 6,
    imgSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1940%2F4a485a58.jpg&w=1060&q=100",
    header: "직장인 유행 테스트",
    content: "직장을 고를 때 나는 어떤 유형일까요?",
  },
];

const StyledWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 5px;
  margin: auto;
  margin-top: 50px;
  max-width: 1060px;
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
    max-width: 1060px;
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

  @media (max-width: 1100px) {
    .swiper-wrapper {
      margin: 90px auto auto;
    }
  }
`;
