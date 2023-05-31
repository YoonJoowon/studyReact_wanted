import React from "react";
import styled from "styled-components";

function Resume() {
  return (
    <ResumeStyle>
      <div>
        <aside className="resume-aside">
          <picture>
            <img
              src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png"
              alt=""
            />
          </picture>
          <button type="button" className="">
            <div className="resume-text">
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

        <div className="resume-header">
          <span className="resume-intro">원티드 이력서 소개</span>
          <svg
            xmlns="https://www.w3.org/2000/svg"          
          >
        </svg>

          <button className="resume-review">
            <span className="">AI 이력서 리뷰</span>

            <span className="">
              <svg className="">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </span>
          </button>
        </div>
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

        p {
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

    .resume-header {
      svg path {
        fill: #3366ff;
      }

      .resume-intro {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        padding: 15px 0;
        color: #36f !important;
        display: flex;
        align-items: center;
      }
    }
  }
`;
