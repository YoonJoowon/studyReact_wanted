import React, { useState } from "react";
import SangPositionBtn from "./SangPositionBtn";
import styled from "styled-components";

function SangPosition() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4%2Fyikyilr7bq6iypte__1080_790.jpg&w=1000&q=75",
      title: "전략기획",
      company: "아이엔지스토리",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 2,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4%2Ftnrcn43zjlpznjww__1080_790.jpg&w=1000&q=75",
      title: "경영관리 (지원)",
      company: "포항",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 3,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fncpb1pbv6mpl3a3x__1080_790.jpg&w=1000&q=75",
      title: "HQ 경영관리팀 경영관리",
      company: "에프엔스엔",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 4,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fw733fyzmucxvyuxm__1080_790.jpg&w=1000&q=75",
      title: "공시 담당자",
      company: "이스트소프트",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 5,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fybdlaw6ubrakrkcj__1080_790.jpg&w=1000&q=75",
      title: "글로벌 커머스 기획",
      company: "매드스퀘어",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 6,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fahndrwxcbupfdi3w__1080_790.jpg&w=1000&q=75",
      title: "재무기획",
      company: "쿠팡",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 7,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2F16ohsl8ldhkkhcno__1080_790.jpg&w=1000&q=75",
      title: "경영관리",
      company: "세어하우스우주",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 8,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fag49vpapvp7kng0f__1080_790.jpg&w=1000&q=75",
      title: "서비스 운영 매니저",
      company: "원티드랩",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 9,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Ffctk9zbz2rb1upnj__1080_790.jpg&w=1000&q=75",
      title: "네트워크 광고 운영 매니저",
      company: "버즈빌",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 10,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fdfoka2yk4aqg46zy__1080_790.jpg&w=1000&q=75",
      title: "파이낸스 매니저",
      company: "굿닥",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 11,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F137%2Fqpbivz9ihqtmm0vo__1080_790.jpg&w=1000&q=75",
      title: "서비스운영 매니저",
      company: "엠비티",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
    {
      id: 12,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15%2F28xctz9hah8ba7q4__1080_790.jpg&w=1000&q=75",
      title: "항공 운영 매니저",
      company: "마이리얼트립",
      site: "서울 한국",
      money: "채용보상금 1,000,000원",
    },
  ]);

  return (
    <SangPositionStyle>
      <section className="section5">
        <article className="feature">
          <h2>이 포지션을 찾고 계셨나요?</h2>
          <div className="fatureContainer">
            <ul data-cy="job-list">
              {articles.map((articles) => (
                <li key={articles.id}>
                  <div data-cy="job-card" className="fatureContainer01">
                    <SangPositionBtn />
                    <img src={articles.image} alt="" />
                    <div className="fatureContainer01_body">
                      <div className="fatureContainer01_1">
                        {articles.title}
                      </div>
                      <div className="fatureContainer01_2">
                        {articles.company}
                      </div>
                      <div className="fatureContainer01_3">{articles.site}</div>
                      <div className="fatureContainer01_4">
                        {articles.money}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </SangPositionStyle>
  );
}

export default SangPosition;

const SangPositionStyle = styled.div`
  /* feature */
  .feature {
    width: 1060px;
    padding: 70px 0px;
    margin: auto;
    height: 1000px;
  }

  .feature h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    color: #111;
    margin-bottom: 30px;
  }

  .fatureContainer {
    margin: auto;
  }

  .fatureContainer ul {
    margin: -10px;
    margin: auto;
  }

  .fatureContainer ul li {
    padding: 5px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    width: 250px;
    margin-bottom: 30px;
  }

  .fatureContainer ul li img {
    width: 250px;
    height: 187.5px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    /* padding-bottom: 75%; */
    position: relative;
    background-size: cover;
  }

  .fatureContainer01 {
    display: block;
    position: relative;
  }  



  .fatureContainer02 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
    margin-right: 1000px;
  }

  .fatureContainer03 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer04 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer05 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer06 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer07 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer08 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer09 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer10 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer11 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer12 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
  }

  .fatureContainer01_body {
    width: 250px;
  }

  .fatureContainer01_1 {
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

  .fatureContainer01_2 {
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

  .fatureContainer01_2_3 {
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

  .fatureContainer01_3 {
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

  .fatureContainer01_4 {
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
