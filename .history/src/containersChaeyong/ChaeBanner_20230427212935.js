import React, { useState } from "react";

function ChaeBanner() {
  return (
    <section>
      <aside className="main3">
        <div className="connect1">
          <source
            className="connect1_back"
            srcset="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.webp"
            type="image/webp"
          />
          <img
            className="connect1_back"
            src="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.png"
            alt="career-connect-icon"
          />
          <source
            className="connect1_front"
            srcset="https://static.wanted.co.kr/career_connect/gomin.webp"
            type="image/webp"
          />
          <img
            className="connect1_front"
            src="https://static.wanted.co.kr/career_connect/gomin.png"
            alt="career-connect-icon"
          />

          <div className="connect1_text1">
            내 연차에 이 연봉 괜찮은가? 궁금할 땐
          </div>
          <div className="connect1_text2">커리어 중간점검</div>
        </div>
      </aside>

      <div className="connect2">
        <ul className="connect2_banner">
          <li className="connect2_bannerA">
            <button type="button">내 프로필</button>
          </li>
          <li className="connect2_bannerB">매치업</li>
        </ul>
      </div>
    </section>
  );
}

export default ChaeBanner;
