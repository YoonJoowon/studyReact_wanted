import React from "react";
import styled from "styled-components";

function Resume() {
  return (
    <ResumeStyle>
      <div>
        <aside class="resume-aside">
          <picture>
            <source srcset="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp" />
            <img
              src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png"
              alt=""
            />
          </picture>
          <button type="button" class="">
            <div class="resume-text">
              <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
              <strong>내 경력 불러오기</strong>
              <picture>
                <source />
                <img
                  src="https://static.wanted.co.kr/career_connect/trio.png"
                  alt=""
                />
              </picture>
            </div>
          </button>
        </aside>
      </div>
    </ResumeStyle>
  );
}

export default Resume;

const ResumeStyle = styled.div`
  position: relative;
  max-width: 1060px;
  margin: auto;
  margin-top: 70px;
  .resume-aside {
    position: relative;
    width: 100%;
    height: 103px;
    border-radius: 10px;
    margin-bottom: 20px;
    background: #2b4bc8;
    cursor: pointer;
    overflow: hidden;

    picture {
      z-index: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 65%;
      height: 90%;

      img {
        width: 300px;
        height: 90px;
      }
    }

    button {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 32px 40px;
      font-size: 22px;
      font-weight: 800;
      line-height: 26px;
      color: #fff;

      .resume-text {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            word-spacing: -3px;
        }

        strong {
          z-index: 1;
          border-radius: 20px;
          background-color: #fff;
          color: #2b4bc8;
          font-size: 15px;
          line-height: 18px;
          font-weight: 600;
          padding: 11px 20px;
        }
      }
    }
  }
`;
