import React from "react";
import SangSide from "./SangSide";
import SangSlide from "./SangSlide";

function SangMainSlide() {
  return (
    <div>
      <section className="section1">
        <SangSlide />
        <SangSide />
      </section>

      <section className="section2">
        <h2 className="section2_react">웹 프론트엔드 개발자(React)</h2>

        <div className="section2_top">
          <h6 className="section2_text1">블루비커</h6>
          <div className="">
            <button className="" type="button">
              <div className="section2_high">응답률 매우 높음</div>
              {/* <!-- <div className="">지원 후 응답받을 확률이 95% 이상입니다.</div> --> */}
            </button>
          </div>
          <span className="section2_korea">서울 한국</span>
        </div>
        <div className="section2_people">
          <ul>
            <li>#인원급성장</li>
            <li>#50명이하</li>
            <li>#설립3년이하</li>
            <li>#스톡옵션</li>
            <li>#워크샵</li>
            <li>#간식</li>
            <li>#원격근무</li>
            <li>#건강검진</li>
            <li>#IT, 컨텐츠</li>
          </ul>
          <div className=""></div>
        </div>
      </section>
    </div>
  );
}

export default SangMainSlide;
