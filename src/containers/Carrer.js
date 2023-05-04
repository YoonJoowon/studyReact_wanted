import React, { useState } from "react";
import styled from "styled-components";

function Carrer() {
  const [textTitle, settextTitle] = useState([
    {
      id: 1,
      title: "커리어 성장을 위한 맞춤 이벤트",
      event: "이벤트 전체보기",
    },
  ]);

  const [articles, setArticles] = useState([
    {
      id: 1,
      box: "교육",
      title: "스타트업 노무관리 전문가 양성과정 2기",
      summary: "2023.06.14 (수)",
    },
    {
      id: 2,
      box: "아티클",
      title: "채용 담장자를 사로잡는 경력직 이력서 쓰는 법",
      summary: "",
      image: "",
    },
  ]);

  return (
    <CarrerStyle>
      <section>
        <article className="main4">
          <div className="main4card1">
            <div className="title00">
              <div className="main4SubTitle">
                <button
                  type="button"
                  className="subTitleBtn1"
                  aria-label="previous button"
                  disabled=""
                >
                  <span className="subTitleBtn1_1">
                    <svg className="subTitleBtn1_2" viewBox="0 0 18 18">
                      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                  </span>
                </button>

                <div className="subTitletxt">
                  <h2 className="subTitletxt1">{textTitle[0].title}</h2>
                </div>

                <button
                  type="button"
                  className="subTitleBtn2"
                  aria-label="next button"
                >
                  <span className="subTitleBtn2_1">
                    <svg className="subTitleBtn2_2" viewBox="0 0 18 18">
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </button>
              </div>

              <div className="main4SubTitle2">
                <div className="main4SubTitle2txt">{textTitle[0].event}</div>
                <span className="">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.34467 8.24802C0.0517767 8.51161 0.0517767 8.93898 0.34467 9.20257C0.637563 9.46617 1.11244 9.46617 1.40533 9.20257L5.65533 5.37773C5.94822 5.11414 5.94822 4.68677 5.65533 4.42317L1.40533 0.59833C1.11244 0.334736 0.637563 0.334736 0.34467 0.59833C0.0517767 0.861923 0.0517767 1.28929 0.34467 1.55288L4.06434 4.90045L0.34467 8.24802Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="subcard00">
              <div className="subcard1">
                <div className="subCard1_img00">
                  <img
                    className="subCard1_img00"
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2740%2F8d7447f4.jpg&amp;w=1200&amp;q=100"
                    alt="스타트업 노무관리 전문가 양성과정 2기"
                    loading="lazy"
                  ></img>
                </div>

                <div className="subCard1_bot">
                  <div className="subCard1_bot_txt">
                    <div className="subCard1Education">
                      <span className="subCard1Education2">
                        {articles[0].box}
                      </span>
                    </div>
                    <div className="subCard1_txt">{articles[0].title}</div>
                    <div className="subCard1_txt2">{articles[0].summary}</div>
                  </div>
                </div>
              </div>

              <div className="subcard2">
                <div className="subCard2_img00">
                  <img
                    className="subCard2_img"
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2669%2F22da8214.jpg&amp;w=1200&amp;q=100"
                    alt="채용 담당자를 사로잡는 경력직 이력서 쓰는 법"
                    loading="lazy"
                  ></img>
                </div>

                <div className="subCard2_bot">
                  <div className="subCard2_bot_txt">
                    <span className="subCard2Article">
                      <span className="subCard2Article2">
                        {articles[1].box}
                      </span>
                    </span>
                    <div className="subCard2_txt">{articles[1].title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </CarrerStyle>
  );
}

export default Carrer;

const CarrerStyle = styled.div`
  /* main4 */
  .main4 {
    margin: auto;
    width: 1060px;
    height: 430px;
    display: flex;
    margin-bottom: 100px;
  }

  .title00 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 51px;
    padding-top: 36px;
  }

  .main4SubTitle {
    width: 1060px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: auto;
    pointer-events: none;
  }

  .subTitle button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    font-size: 16px;
  }

  .subTitleBtn1 {
    cursor: not-allowed;
    opacity: 0.7;
    color: #ddd;
    border: 1px solid #eee;
    border-radius: 50%;
  }

  .subTitleBtn1_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn1_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }

  .subTitletxt {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9px;
  }

  .subTitletxt1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9px;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: #333;
    text-align: center;
  }

  .subTitletxt1 img {
    width: 24px;
    height: 24px;
  }

  .subTitletxt2 {
    color: #333;
    text-align: center;
    font-weight: 400;
  }

  .subTitleBtn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    width: 36px;
    height: 36px;
  }

  .subTitleBtn2_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn2_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }

  .main4SubTitle2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main4SubTitle2txt {
    padding-top: 2px;
    margin-right: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #767676;
    float: none;
  }

  /* subcard1 */
  .subcard00 {
    display: flex;
    margin-top: 20px;
  }

  .subCard1 {
    border: 1px solid black;
    width: 540px;
    height: 350px;
    padding: 10px;
  }

  .subCard1_img00 {
    border-radius: 4px;
    width: 520px;
    height: 270px;
    object-fit: cover;
    margin: 5px;
  }

  .subCard1_img {
    border-radius: 4px;
    width: 520px;
    height: 270px;
    object-fit: cover;
  }

  .subCard1_bot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
    margin-top: 17px;
  }

  .subCard1_bot_img {
    height: 21px;
  }

  .subCard1_bot_txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .subCard1Education2 {
    color: #000000;
    border-color: #000000;

    display: inline-flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    height: 20px;
    border: 1px solid;
    border-radius: 2px;

    border-width: 0.5px;
    font-size: 11px;
    font-weight: 700;
    line-height: normal;
    padding: 0 6px;
  }

  .subCard1_txt {
    margin-top: 4px;
    font-size: 16px;
  }

  .subCard1_txt2 {
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-top: 4px;
  }

  .subCard1_btn {
    height: 40px;
    font-size: 15px;
    color: #36f;
    background-color: #fff;
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    border: none;
    background-color: none;
    cursor: pointer;
    border: 1px solid #e1e2e3;
    padding: 12px 25.5px 11px;
    line-height: 1;
  }

  .subCard1_btn p {
    width: 100%;
    font-size: inherit;
    font-weight: inherit;
    display: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    color: inherit;
  }

  /* subcard2 */
  .subCard2 {
    border: 1px solid black;
    width: 540px;
    height: 350px;
    padding: 10px;
  }

  .subCard2_img00 {
    width: 520px;
    height: 270px;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }

  .subCard2_img {
    border-radius: 4px;
    width: 520px;
    height: 270px;
    object-fit: cover;
  }

  .subCard2_bot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
    margin-top: 10px;
  }

  .subCard2_bot_txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .subCard2Article2 {
    color: #ff9100;
    border-color: #ff9100;

    display: inline-flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    height: 20px;
    border: 1px solid;
    border-radius: 2px;

    border-width: 0.5px;
    font-size: 11px;
    font-weight: 700;
    line-height: normal;
    padding: 0 6px;
  }

  .subCard2_txt {
    margin-top: 4px;
    font-size: 16px;
  }
`;
