import React, { useState } from "react";
import styled from "styled-components";

function ChaePosition() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "전략기획 ",
      name: "아이엔지스토리",
    },
    {
      id: 2,
      title: "해외 파트너십 마케팅",
      name: "스와치온(SwatchOn)",
    },
    {
      id: 3,
      title: "#Sales Account Executive [AE팀]",
      name: "원티드랩",
    },
    {
      id: 4,
      title: "콘텐츠 마케터",
      name: "코스트",
    },
  ]);

  const num = "1000000";
  const rewardAmount = num
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <ChaePositionStyle>
      <section>
        <article className="feature">
          <h2>요즘 뜨는 포지션</h2>
          <div className="fatureContainer">
            <ul data-cy="job-list">
              <li>
                <div data-cy="job-card" className="fatureContainer01">
                  <button
                    className="bookmarkBtn"
                    type="button"
                    aria-label="bookmark button"
                    data-attribute-id="position__bookmark__click"
                    data-kind="add"
                    data-job-category-id="523"
                    data-job-category="Marketing &amp; Advertising"
                    data-company-id="39517"
                    data-company-name="아이엔지스토리"
                    data-position-id="152842"
                    data-position-name="전략기획"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                        fill="black"
                        fillOpacity="0.25"
                      ></path>
                    </svg>
                  </button>
                  <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F39517%2F8coxxmptdjimx8kk__400_400.jpg&amp;w=400&amp;q=75"'></img>
                  <div className="fatureContainer01_body">
                    <div className="fatureContainer01_1">
                      {articles[0].title}
                    </div>
                    <div className="fatureContainer01_2">
                      {articles[0].name}
                    </div>
                    <div className="fatureContainer01_3">
                      서울<span className="addressDot">.</span>
                      <span>한국</span>
                    </div>
                    <div className="fatureContainer01_4">
                      <div>채용보상금 {rewardAmount}원</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div data-cy="job-card" className="fatureContainer02">
                  <button
                    className="bookmarkBtn"
                    type="button"
                    aria-label="bookmark button"
                    data-attribute-id="position__bookmark__click"
                    data-kind="add"
                    data-job-category-id="523"
                    data-job-category="Marketing &amp; Advertising"
                    data-company-id="8177"
                    data-company-name="스와치온(SwatchOn)"
                    data-position-id="151227"
                    data-position-name="해외 파트너십 마케팅"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                        fill="black"
                        fillOpacity="0.25"
                      ></path>
                    </svg>
                  </button>
                  <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8177%2Ffr3dtvmomfzj6gbr__400_400.jpeg&amp;w=400&amp;q=75"'></img>
                  <div className="fatureContainer01_body">
                    <div className="fatureContainer01_1">
                      {articles[1].title}
                    </div>
                    <div className="fatureContainer01_2">
                      {articles[1].name}
                    </div>
                    <div className="fatureContainer01_3">
                      서울<span className="addressDot">.</span>
                      <span>한국</span>
                    </div>
                    <div className="fatureContainer01_4">
                      <div>채용보상금 {rewardAmount}원</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div data-cy="job-card" className="fatureContainer03">
                  <button
                    className="bookmarkBtn"
                    type="button"
                    aria-label="bookmark button"
                    data-attribute-id="position__bookmark__click"
                    data-kind="add"
                    data-job-category-id="530"
                    data-job-category="Sales"
                    data-company-id="79"
                    data-company-name="원티드랩"
                    data-position-id="152319"
                    data-position-name="Sales Account Executive [AE팀]"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                        fill="black"
                        fillOpacity="0.25"
                      ></path>
                    </svg>
                  </button>
                  <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F79%2Fno3ey0e5mjbismfq__400_400.jpg&amp;w=400&amp;q=75"'></img>
                  <div className="fatureContainer01_body">
                    <div className="fatureContainer01_1">
                      {articles[2].title}
                    </div>
                    <div className="fatureContainer01_2">
                      {articles[0].name}
                    </div>
                    <div className="fatureContainer01_2_2">
                      <button
                        className="fatureContainer01_2_2btn1"
                        type="button"
                      >
                        <div className="fatureContainer01_2_2btn2"></div>
                        <div className="fatureContainer01_2_3">
                          응답률 매우 높음
                        </div>
                      </button>
                    </div>
                    <div className="fatureContainer01_3">
                      서울<span className="addressDot">.</span>
                      <span>한국</span>
                    </div>
                    <div className="fatureContainer01_4">
                      <div>채용보상금 {rewardAmount}원</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div data-cy="job-card" className="fatureContainer04">
                  <button
                    className="bookmarkBtn"
                    type="button"
                    aria-label="bookmark button"
                    data-attribute-id="position__bookmark__click"
                    data-kind="add"
                    data-job-category-id="523"
                    data-job-category="Marketing &amp; Advertising"
                    data-company-id="35834"
                    data-company-name="코스트"
                    data-position-id="152265"
                    data-position-name="콘텐츠 마케터"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                        fill="black"
                        fillOpacity="0.25"
                      ></path>
                    </svg>
                  </button>
                  <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35834%2Fb8iiph247mvbglh8__400_400.jpg&amp;w=400&amp;q=75"'></img>
                  <div className="fatureContainer01_body">
                    <div className="fatureContainer01_1">
                      {articles[3].title}
                    </div>
                    <div className="fatureContainer01_2">
                      {articles[3].title}
                    </div>
                    <div className="fatureContainer01_3">
                      서울<span className="addressDot">.</span>
                      <span>한국</span>
                    </div>
                    <div className="fatureContainer01_4">
                      <div>채용보상금 {rewardAmount}원</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </ChaePositionStyle>
  );
}

export default ChaePosition;

const ChaePositionStyle = styled.div`

/* feature */
.feature{
    width: 1060px;
    height: 537px;
    margin: auto;
    margin-top: 150px;
    padding-top: 70px

}

.feature h2{
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    color: #111;
    margin-bottom: 30px;
}

.fatureContainer ul{
    margin: -10px;
    margin: auto;
}

.fatureContainer ul li{
    padding: 5px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    width: 250px;

}

.fatureContainer ul li img{
    width: 250px;
    height: 187.5px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    /* padding-bottom: 75%; */
    position: relative;
    background-size: cover;
}

    .fatureContainer01{
        display: block;
        
    } 

    .fatureContainer01 .bookmarkBtn{
        position: absolute;
        z-index: 1;
        width: 40px;
        height: 30px;
        border-radius: 3px;
        margin-right: 1200px;
    }

    .fatureContainer02 .bookmarkBtn{
        position: absolute;
        z-index: 1;
        width: 40px;
        height: 30px;
        border-radius: 3px;
        margin-right: 1000px;
    }

    .fatureContainer03 .bookmarkBtn{
        position: absolute;
        z-index: 1;
        width: 40px;
        height: 30px;
        border-radius: 3px;

    }

    .fatureContainer04 .bookmarkBtn{
        position: absolute;
        z-index: 1;
        width: 40px;
        height: 30px;
        border-radius: 3px;

    }

    .fatureContainer01_body{
        width: 250px;
    }


    .fatureContainer01_1{
        text-overflow: ellipsis;
        position: relative;
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        max-height: 2.4em;
        overflow: hidden;
        text-align: left;
        word-break: break-word;
        width: 250px;
        margin-right: 0px;
        margin-top: 10px;
    } 

    .fatureContainer01_2{
        font-size: 14px;
        line-height: normal;
        text-align: left;
        word-break: break-word;
        width: 250px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 10px;
        color: #333;
        font-weight: 600;

    } 

    .fatureContainer01_2_3{
        position: relative;

        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 4px;
        padding: 0 5px;

        border: 1px solid #00aead;
        color: #00aead;

        position: relative;
        line-height: 19px;
        left: -8px;

    }

    .fatureContainer01_3{
        font-size: 14px;
        line-height: normal;
        text-align: left;
        word-break: break-word;
        width: 250px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 10px;

    } 

    .fatureContainer01_4{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        word-break: break-word;
        width: 250px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

    }
`;
