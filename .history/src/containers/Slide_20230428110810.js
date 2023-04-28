import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slide() {
  return (
    <section className="main1">
      <article className="slide">
        <div className="slideImg">
          <p className="controller">
            {/* 이전 버튼 */}
            <button type="button" className="prev">
              <span className="">
                <svg className="" viewBox="0 0 18 18">
                  <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>
              </span>
            </button>

            {/* 다음 버튼 */}
            <button type="button" className="next">
              <span className="">
                <svg className="" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </button>
          </p>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // modules={[Autoplay]} //자동으로 slide 넘어감
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <div id="slideShow" className="slidShow">
              <div className="controller">
                {/* 이전 버튼 */}
                <div className="swiper-button-prev">
                  <span>&lt;</span>
                </div>

                {/* 다음 버튼 */}
                <div className="swiper-button-next"></div>
              </div>

              <div className="slides">
                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100"
                    alt="당신의 모빌리티 파트너, TMAP"
                    className=""
                  ></img>
                  <div className="subSlide">
                    <h2>프리온보딩 프론트엔드 인턴십</h2>
                    <h3>기업이 진짜 원하는 프론트엔드 주니어</h3>
                    <hr className="subSlide01"></hr>
                    <a
                      href="/company/1571"
                      className="subSlide02"
                      aria-label=""
                    >
                      <span className="subSlide03">
                        바로가기
                        <span className="subSlide04"></span>
                        <span className="subSlide05">
                          <svg className="subSlide06" viewBox="0 0 18 18">
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100"
                    alt="프리온보딩 프론트엔드 인턴십 (4월)"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100"
                    alt="흔들림 없이 성장하니까,"
                    className=""
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2008%2F75ffb8c1.jpg&amp;w=1060&amp;q=100"
                    alt="프롭테크의 선두주자 SK D&amp;D"
                    className=""
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100"
                    alt="'100억' 투자받은 XYZ"
                    className=""
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1991%2Fd44d240d.jpg&w=1060&q=100"
                    alt=""
                  ></img>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </article>
    </section>
  );
}

export default Slide;
