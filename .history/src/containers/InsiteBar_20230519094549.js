import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import InsiteBarBtnPrev from "./InsiteBarBtnPrev";
import InsiteBarBtnNext from "./InsiteBarBtnNext";
import { Navigation, Pagination } from "swiper";

const InsiteBarStyle = styled.div`
  .insiteBarWrap {
    display: flex;
  }

  .swiper {
    width: 1012px;
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    .swiper-wrapper {
      display: flex;
    }
  }

  .swiper-slide {
    /* display: flex; */
  }

  .swiper-slide button {
    font-weight: 700;
    font-size: 15px;
    line-height: 146.7%;
    color: #8a8a8a;
    height: 40px;
    position: relative;
    border: 1px solid #e1e2e3;
    border-radius: 30px;
    /* padding: 6px 22px; */
    width: 110px;
    cursor: pointer;

    flex-shrink: 0;
    outline: none;
  }

  .swiper-slide :hover {
    background-color: #d4d4d4;
  }

  .buttonWrapper {
    position: absolute;
    margin: auto;
    width: 1012px;
    height: 0px;
  }

  .InterestTagSlide {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
    min-width: 40px;
    min-height: 34px;
    border: 1px solid #e1e2e4;
    -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #8a8a8a;
    background-color: #fff;
    cursor: pointer;
  }

  @media (min-width: 700px) and (max-width: 1100px) {
    .careerinsite {
      width: 100%;
      text-align: center;
    }

    .insiteBarswiper {
      max-width: 1060px;
      width: 100%;
    }

    .swiper {
      max-width: calc(100% - 40px - 8px);
      display: flex;
      overflow: hidden;
      position: relative;

      .swiper-wrapper {
      }
    }
  }
`;

function InsiteBar() {
  return (
    <InsiteBarStyle>
      <div className="insiteBarWrap">
        <Swiper
          navigation={true}
          spaceBetween={18}
          slidesPerView={"auto"}
          // centeredSlides={true}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          watchOverflow={true}
        >
          {articles.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <button>{x.title}</button>
              </SwiperSlide>
            );
          })}
          <div className="buttonWrapper">
            <InsiteBarBtnPrev />
            <InsiteBarBtnNext />
          </div>
        </Swiper>
        <button type="button" className="InterestTagSlide">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
            ></path>
          </svg>
        </button>
      </div>
    </InsiteBarStyle>
  );
}

const articles = [
  {
    id: 1,
    title: "조직문화",
  },
  {
    id: 2,
    title: "회사생활",
  },
  {
    id: 3,
    title: "인간관계",
  },
  {
    id: 4,
    title: "리더십",
  },
  {
    id: 5,
    title: "IT/기술",
  },
  {
    id: 6,
    title: "취업이직",
  },
  {
    id: 7,
    title: "커리어고민",
  },
  {
    id: 8,
    title: "라이프스타일",
  },
  {
    id: 9,
    title: "노무",
  },
  {
    id: 10,
    title: "개발",
  },
  {
    id: 11,
    title: "경영전략",
  },
  {
    id: 12,
    title: "서비스기획",
  },
  {
    id: 13,
    title: "마케팅",
  },
  {
    id: 14,
    title: "브랜드",
  },
  {
    id: 15,
    title: "UX/UI",
  },
  {
    id: 16,
    title: "디자인",
  },
  {
    id: 17,
    title: "콘텐츠제작",
  },
  {
    id: 18,
    title: "HR",
  },
  {
    id: 19,
    title: "MD",
  },
];

export default InsiteBar;
