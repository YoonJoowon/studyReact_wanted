import React, { useState } from "react";
import SangBtnSlide from "./SangBtnSlide";

function SangSlide() {
  const [articles, setArticles] = useState([
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
  ]);

  return (
    <div>
      {/* <SangBtnSlide /> */}
      <div className="section1_img00">
        <div className="section1_img00_1">
          <img src={articles[0].image} alt="" />
          <img src={articles[1].image} alt="" />
          <img src={articles[2].image} alt="" />
          <img src={articles[3].image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SangSlide;
