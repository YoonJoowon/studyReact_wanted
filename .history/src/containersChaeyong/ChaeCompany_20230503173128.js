import React, { useState } from "react";
import styled from "styled-components";
import ChaeFollowBtn from "./ChaeFollowBtn";
import ChaeCompanyBtnPrev from "./ChaeCompanyBtnPrev";
import ChaeCompanyBtnNext from "./ChaeCompanyBtnNext";

function ChaeCompany() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "#급성장 중 ",
      title2: "회사를 소개합니다",
      title3: "포지션으로 더보기",
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75",
    },
    {
      id: 2,
      title: "#50이상 기업",
      title2: "회사를 소개합니다",
      title3: "포지션으로 더보기",
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&amp;w=75&amp;q=75",
    },
    {
      id: 3,
      title: "테마로 모아보는 요즘 채용",
    },
  ]);

  const [text1, setText1] = useState([
    {
      id: 1,
      title: "미소 (miso) ",
      title2: "IT, 컨텐츠",
    },
    {
      id: 2,
      title: "여기어때컴퍼니",
      title2: "IT, 컨텐츠",
    },
    {
      id: 3,
      title: "메타비티",
      title2: "IT, 컨텐츠",
    },
    {
      id: 4,
      title: "이스턴네트워스",
      title2: "IT, 컨텐츠",
    },
    {
      id: 5,
      title: "k-유니콘기업",
      title2: "기업성과 사업성을 검증받은 국내 유망 기업을 소개합니다.",
    },
    {
      id: 6,
      title: "이스턴네트워스",
      title2:
        "회사가 성장하는 만큼 성과급, 상여급으로 보상하는 기업을 소개합니다.",
    },
  ]);

  return (
    <ChaeCompanyStyle>
          <article className="main4">
            <div className="main4card1">
              {articles.map((article) => (
                <div key={article.id}>
                  <div className="title00">
                    <div className="main4SubTitle">
                      <ChaeCompanyBtnPrev></ChaeCompanyBtnPrev>

                      <div className="subTitletxt">
                        <h2 className="subTitletxt1">
                          {article.title}
                          <img
                            className="sunTitle1_1_img"
                            src={article.img}
                            alt=""
                          />
                        </h2>
                        <div className="subTitletxt2">{article.title2}</div>
                      </div>

                      <ChaeCompanyBtnNext></ChaeCompanyBtnNext>
                    </div>

                    <div className="main4SubTitle2">
                      <div className="main4SubTitle2txt">
                        {article.title3}
                      </div>
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
                          className="subCard1_img"
                          src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F459%2F12678_2_0.6514ddbd__1080_790.jpg&amp;w=520&amp;q=100"'
                          alt=""
                        />
                      </div>

                      <div className="subCard1_bot">
                        <div className="subCard1_bot_img">
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.77c63da8.png&amp;w=42&amp;q=100&quot"
                            alt=""
                          />
                        </div>
                        <div className="subCard1_bot_txt">
                          <div className="subCard1_txt">{text1[0].title}</div>
                          <div className="subCard1_txt2">{text1[0].title2}</div>
                        </div>
                        <ChaeFollowBtn></ChaeFollowBtn>
                      </div>
                    </div>

                    <div className="subcard2">
                      <div className="subCard2_img00">
                        <img
                          className="subCard2_img"
                          src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fncpb1pbv6mpl3a3x__1080_790.jpg&amp;w=520&amp;q=100"'
                          alt=""
                        />
                      </div>

                      <div className="subCard2_bot">
                        <div className="subCard2_bot_img">
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.f8117983.png&amp;w=42&amp;q=100&quot"
                            alt=""
                          />
                        </div>
                        <div className="subCard2_bot_txt">
                          <div className="subCard1_txt">{text1[1].title}</div>
                          <div className="subCard1_txt2">{text1[1].title2}</div>
                        </div>
                        <ChaeFollowBtn></ChaeFollowBtn>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
    </ChaeCompanyStyle>
  );
}

export default ChaeCompany;

const ChaeCompanyStyle = styled.div`
  /* main2 */

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

  /* main4 - 테마로 모아보는 오즘 채용 */
  .temaCard_bot {
    margin-top: 50px;
    margin-left: 8px;
  }

  .subCard1_tema_img {
    width: 520px;
    height: 300px;
  }

  .tema_txt {
    width: 520px;
    height: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    word-break: break-all;
  }

  .tema_txt2 {
    width: 520px;
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-top: 8px;
  }

  .tema_txt3 {
    width: 520px;
    height: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    word-break: break-all;
  }

  .tema_txt4 {
    width: 520px;
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-top: 8px;
  }

  .tema_img {
    margin-top: 16px;
    margin-left: 8px;
    display: flex;
    align-items: center;
  }

  .tema_img img {
    display: inline;
    margin-right: 8px;
  }

  .tema_img span {
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }
`;