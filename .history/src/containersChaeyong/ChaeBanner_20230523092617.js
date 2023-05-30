import React, { useState } from "react";
import styled from "styled-components";

function ChaeBanner() {
  return (
    <ChaeBannerStyle>
      <section>
        <aside className="main3">
          <div className="connect1">
            <source
              className="connect1_back"
              srcSet="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.webp"
              type="image/webp"
            />
            <img
              className="connect1_back"
              src="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.png"
              alt="career-connect-icon"
            />
            <source
              className="connect1_front"
              srcSet="https://static.wanted.co.kr/career_connect/gomin.webp"
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
    </ChaeBannerStyle>
  );
}

export default ChaeBanner;

const ChaeBannerStyle = styled.div`
  /* main3 */
  .main3 {
    width: 1060px;
    height: 103px;
    display: flex;
    margin-top: 60px;
  }

  .connect1 {
    position: relative;
    max-width: 1060px;
    height: 100%;
    font-size: 22px;
    font-weight: 800;
    line-height: 26px;
    color: #fff;
    margin: auto;

    /* padding-right: 200px; */
  }

  .connect1_back {
    z-index: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1060px;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(32, 73, 196);
    left: 0px;
    margin: auto;
  }

  .connect1_front {
    position: absolute;
    top: 7px;
    left: 700px;

    margin-right: 200px;
    width: 124px;
    height: 100px;
  }

  .connect1_text1 {
    z-index: 1;
    position: absolute;
    padding: 40px;
    left: 50px;
  }

  .connect1_text2 {
    position: absolute;
    z-index: 1;
    border-radius: 20px;
    background-color: #fff;
    color: #2b4bc8;
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    padding: 11px 20px;
    margin-top: 32px;
    right: 20px;
  }

  .connect2 {
    align-items: center;
    flex-wrap: wrap;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    word-break: break-all;
    display: flex;
  }

  .connect2_banner {
    display: flex;
    margin: auto;
    padding: 60px 0px 85px;
  }

  .connect2_banner li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0;
    height: 80px;
  }

  .connect2_bannerA {
    width: 530px;
    height: 80px;
    background-color: #f2f5ff;
    border-top-left-radius: 38.5px;
    border-bottom-left-radius: 38.5px;
    border-left: none;
  }

  .connect2_bannerB {
    width: 530px;
    height: 80px;
    border-top-right-radius: 38.5px;
    border-bottom-right-radius: 38.5px;
    background-color: #f2fbf5;
  }
`;
