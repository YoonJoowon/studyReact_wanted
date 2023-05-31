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
          <div className="resume-intro">
            <span className="resume-intro-txt">
              원티드 이력서 소개{" "}
              <svg
                className="resume-intro-svg"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M11.7341 16.2486C10.8677 16.5748 9.94548 16.7442 9 16.7442C4.7232 16.7442 1.25581 13.2771 1.25581 9C1.25581 4.72293 4.7232 1.25581 9 1.25581C11.0825 1.25581 13.0329 2.08087 14.476 3.524C15.9194 4.96743 16.7442 6.91758 16.7442 9C16.7442 11.0833 15.9194 13.0334 14.4761 14.4759C14.2308 14.721 14.2307 15.1186 14.4759 15.3639C14.721 15.6091 15.1186 15.6093 15.3639 15.3641C17.0406 13.6885 18 11.4199 18 9C18 6.58111 17.0406 4.31263 15.364 2.636C13.6877 0.959718 11.419 0 9 0C4.02965 0 0 4.02934 0 9C0 13.9707 4.02965 18 9 18C10.0973 18 11.1694 17.8031 12.1766 17.4239C12.5011 17.3017 12.6652 16.9396 12.543 16.615C12.4208 16.2905 12.0586 16.1264 11.7341 16.2486Z"></path>
                <path d="M8.16279 5.65116C8.16279 5.18819 8.53786 4.81395 9 4.81395C9.46214 4.81395 9.83721 5.18819 9.83721 5.65116C9.83721 6.11414 9.46214 6.48837 9 6.48837C8.53786 6.48837 8.16279 6.11414 8.16279 5.65116Z"></path>
                <path d="M9.62791 8.99668V13.0664C9.62791 13.4132 9.34678 13.6944 9 13.6944C8.65322 13.6944 8.37209 13.4132 8.37209 13.0664V8.99668C8.37209 8.64989 8.65322 8.36877 9 8.36877C9.34678 8.36877 9.62791 8.64989 9.62791 8.99668Z"></path>
              </svg>
            </span>
          </div>

          <button className="resume-review">
            <p className="resume-review-txt">
              <p className="">AI 이력서 리뷰 &gt;</p>
            </p>
          </button>
        </div>

        <div className="resume-make">
          <div className="resume-new-make">
            <div className="">
              <div className="ResumeList_ResumeList_addItem_icon__yfHFj">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.25 0H0.75C0.335786 0 0 0.335786 0 0.75V12.25C0 12.6642 0.335786 13 0.75 13H3V15.25L3.00685 15.3518C3.05651 15.7178 3.3703 16 3.75 16H15.25L15.3518 15.9932C15.7178 15.9435 16 15.6297 16 15.25V3.75L15.9932 3.64823C15.9435 3.28215 15.6297 3 15.25 3L15.1482 3.00685C14.7822 3.05651 14.5 3.3703 14.5 3.75L14.499 14.499H4.499L4.49975 13H12.25C12.6642 13 13 12.6642 13 12.25V0.75C13 0.335786 12.6642 0 12.25 0ZM11.499 1.5V11.5H1.499V1.5H11.499Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <p>새 이력서 작성</p>
            </div>
          </div>

          <div
            className="resume-new-fileUpload"
            data-attribute-id=""
            role="button"
          >
            <div className="ResumeList_ResumeList_upload___7VWD" tabindex="0">
              <input
                multiple=""
                type="file"
                autocomplete="off"
                tabindex="-1"
                data-attribute-id="resumeList__resume__uploadFile"
              />
              <div className="ResumeList_ResumeList_upload_icon__3SGaN">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="26"
                  height="28"
                  viewBox="0 0 32 34"
                >
                  <path
                    d="M25.6 20.117L25.6 28.579 0 28.617 0 20.154M12.8.708L12.8 21.108"
                    transform="translate(-543 -398) translate(543 398) translate(3.2 2.55)"
                  ></path>
                  <path
                    d="M18.8 0L12.8 7.083 6.8 0"
                    transform="translate(-543 -398) translate(543 398) translate(3.2 2.55) rotate(-180 12.8 3.542)"
                  ></path>
                </svg>
              </div>
              <p>파일 업로드</p>
            </div>
          </div>
        </div>
      </div>
    </ResumeStyle>
  );
}

export default Resume;

const ResumeStyle = styled.div`
  margin: auto;
  width: 100%;
  position: fixed;
  height: 5000px;
  z-index: 1;
  background-color: #f8f8f8;

  .resume-aside {
    position: relative;
    width: 1060px;
    height: 103px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 70px;
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
  }

  .resume-header {
    display: flex;
    width: 1060px;
    margin: auto;
    margin-top: 10px;
    position: relative;
    height: 50px;

    .resume-intro {
      display: flex;
      left: 0;
      width: 100%;
      height: 100%;

      .resume-intro-txt {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        padding: 15px 0;
        color: #36f !important;
        display: flex;
        align-items: center;
        position: absolute;
      }

      .resume-intro-svg {
        fill: #3366ff;
        width: 20px;
        height: 20px;
        margin-left: 5px;
        justify-content: center;
        align-items: center;
      }
    }

    .resume-review {
      position: absolute;
      right: 0;
      display: block;
      overflow: hidden;
      border-radius: 30px;
      color: #fff;
      background-color: #3366ff;
      transition: opacity 0.2s ease;
      will-change: opacity;
      width: 150px;
      height: 35px;

      .resume-review-txt {
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .resume-make {
    margin: auto;
    width: 1060px;

    .resume-new-make {
      height: 190px;
      width: calc(25% - 20px);
      margin-bottom: 20px;
      margin-right: 20px;
      position: relative;
      border: 1px solid #dbdbdb;
      background-color: #fff;
      cursor: pointer;
    }

    .resume-new-fileUpload {
      height: 190px;
      width: calc(25% - 20px);
      margin-bottom: 20px;
      margin-right: 20px;
      position: relative;
      border: 1px solid #dbdbdb;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;
