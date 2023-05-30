import React, { useState } from "react";
import styled from "styled-components";

const FootStyle = styled.div`
  .footer {
    height: 245px;
    position: relative;
  }

  .footer_line {
    opacity: 0.2;
    width: 100%;
    margin: auto;
  }

  .footer .footClass {
    padding: 18px 0px;
    background-color: #fff;
    display: flex;
    max-width: 1060px;
    margin: auto;
    align-items: center;
  }

  .footer .footbottom {
    flex-grow: 1;
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto 18px;
    display: flex;
  }

  .footer .footbottom .footbottom_logo {
    display: flex;
    justify-content: space-between;
    width: 113px;
  }

  .footer .variable {
    display: flex;
  }

  .footer .footbottom span {
    font-size: 15px;
    color: #3a3a3a;
    font-weight: 600;
    line-height: 2.6;
    padding: 0px 20px 0px 20px;
    white-space: nowrap;
  }

  .footer .footbottom2 {
    display: flex;
    flex-wrap: nowrap;
    line-height: 2.6;
  }

  .footbottom2 img {
    position: relative;
    display: block;
    float: left;
    height: 20px;
    margin-left: 14px;
  }

  .rowClass {
    border-top: 1px solid #ececec;
    padding-top: 25px;

    width: 90%;
    max-width: 1060px;
    margin: 0 auto 18px;
    display: flex;

    width: 1060px;
    height: 60px;
  }

  .rowClassTxt {
    width: 770px;
    height: 60px;
    float: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6666666667em;
    color: #767676;
    width: calc(100% - 290px);
    margin-right: 40px;
  }

  @media (max-width: 1000px) {
    .footer {
      padding: 30px 25px 50px;

      .footClass {
        display: block;
        margin: auto;
      }

      .footbottom {
        display: block;
        margin: auto;
      }

      .footbottom_logo {
        margin: auto;
      }

      .variable {
        flex-wrap: wrap;
        justify-content: center;
        max-width: 280px;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .footbottom2 {
        margin: auto;
        justify-content: center;

        a {
          margin: auto;
          width: 20px;
        }
      }

      .rowClass {
        text-align: center;
      }
    }
  }
`;

function Footer() {
  return (
    <FootStyle>
      <div className="footer">
        <div className="footer_line">
          <hr className="banner_line_line"></hr>
        </div>
        <div className="footClass">
          <div className="footbottom">
            <div className="footbottom_logo">
              <svg width="31.4%" height="100%" viewBox="0 0 79 32">
                <path
                  fill="#24e0a6"
                  d="M27.755 5.155A15.953 15.953 0 0015.992 0C7.152 0-.012 7.164-.012 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0031.996 16c0-4.183-1.606-7.992-4.241-10.845z"
                ></path>
                <path
                  fill="#438bff"
                  d="M51.286 5.155A15.953 15.953 0 0039.523 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0055.527 16c0-4.179-1.61-7.992-4.241-10.845z"
                ></path>
                <path
                  fill="#2c5bf2"
                  d="M74.812 5.155A15.953 15.953 0 0063.049 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0079.053 16c0-4.183-1.61-7.992-4.241-10.845z"
                ></path>
              </svg>
              <svg width="62.96%" height="100%" viewBox="0 0 140 32">
                <path
                  fill="currentColor"
                  d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
                ></path>
              </svg>
            </div>
            <div className="variable">
              <span>기업소개</span>
              <span>이용약관</span>
              <span>고객센터</span>
              <span>개인정보 처리방침</span>
            </div>
          </div>

          <div className="footbottom2">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
              alt="instagram"
            ></img>

            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
              alt="youtube"
            ></img>

            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
              alt="facebook"
            ></img>

            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
              alt="blog"
            ></img>

            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
              alt="apple"
            ></img>

            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
              alt="google"
            ></img>
          </div>
        </div>
        <div className="rowClass">
          <p className="rowClassTxt">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            사업자등록번호 : 299-86-00021 | 02-539-7118
            <br />© Wantedlab, Inc.
          </p>
        </div>
      </div>
    </FootStyle>
  );
}

export default Footer;
