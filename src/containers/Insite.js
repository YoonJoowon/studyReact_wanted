import React, { useState } from "react";
import InsiteBar from "./InsiteBar";
import styled from "styled-components";

function Insite() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "안전하고 쉬운 해외 부동산 투자를 위해ㅣ이지웅 빌드블록 부대표",
      summary:
        "‘누구나 안전하고 쉽게 부동산 투자하는 세상’을 꿈꾸는 빌드블록의 성장 비밀은 무엇일까. 고인물은 살아남을 수 없다는 생존형 스타트업 ‘빌드블록’의 이지웅 부대표를 만나봤다.",
      image:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FeyW6%2Fimage%2FZWQHTLNV8yprx0P6p1Omq_Dt7ts.jpg&w=750&q=100",
    },
    {
      id: 2,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FbFXF%2Fimage%2FvDWbKKHTT5gRGoC7GIxJZa3hVB4.jpeg&w=750&q=100",
    },
    {
      id: 3,
      title: "끝나지 않는 코로나, 비대면 조직문화 활성화를 위한 과제 - 송창용",
      summary:
        "코로나 19의 충격파는 이미 20세기 초 세계 대 공황을 넘어선지 오래입니다. 비대면 상황에서도 나름의 길을 찾아요.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220703%2F14%2F51209230.jpg&w=750&q=100",
    },
    {
      id: 4,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2126%2Fff86edbf.jpg&w=1200&q=90",
    },
    {
      id: 5,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F1J9E%2Fimage%2F65hU_AZK4PA3KRaAPh0nY5N7Auc.png&w=750&q=100",
    },
    {
      id: 6,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F92347876.jpg&w=750&q=100",
    },
    {
      id: 7,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2169%2Ff7b90036.jpg&w=1200&q=90",
    },
    {
      id: 8,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FNcEwC6tr5LU%2Fhq720_2.jpg%3Fsqp%3D-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE%3D%26rs%3DAOn4CLA0BLz_o58fbcgnH6LLa3W0fAUHRw&w=750&q=100",
    },
    {
      id: 9,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=750&q=100",
    },
    {
      id: 10,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FA1Z%2Fimage%2FeDrgPRtEQn2wenPIrjRPa7vF-A4.png&w=750&q=100",
    },
    {
      id: 11,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F00307525.jpg&w=750&q=100",
    },
    {
      id: 12,
      title: "지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요",
      summary:
        "제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.",
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F1843%2F874b5387.jpg&w=1200&q=90",
    },
  ]);

  return (
    <InsiteStyle>
      <section className="main2">
        <div className="section1">
          <div className="careerinsite">
            <div className="careerinsite_text">
              <h2>나에게 필요한 커리어 인사이트</h2>
            </div>
            <div className="careerinsite_img">
              <button>
                <svg width="24" height="24" viewBox="0 0 17 17">
                  <g fill="none" fillRule="evenodd">
                    <g>
                      <g>
                        <g transform="translate(-1080 -374) translate(1080 374)">
                          <g>
                            <path
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.2"
                              d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                              transform="translate(1 1)"
                            ></path>
                            <path
                              fill="#999"
                              d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                              transform="translate(1 1) rotate(-180 7.053 10.408)"
                            ></path>
                            <path
                              stroke="#999"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.2"
                              d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                              transform="translate(1 1)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="insitewrap">
            <InsiteBar></InsiteBar>

            <div className="insiteview">
              <ul className="insitemenu_view">
                {articles.map((article) => (
                  <li key={article.id}>
                    <div className="box">
                      <div className="img">
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="info">
                        <p className="subject">{article.title}</p>
                        <p className="summary">{article.summary}</p>
                      </div>
                      <div className="icon">
                        <span className="img_icon">
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&amp;w=60&amp;q=90"
                            alt="Wanted"
                            className=""
                          />
                        </span>
                        <span className="icon_name">Wanted</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </InsiteStyle>
  );
}

export default Insite;

const InsiteStyle = styled.div`
  /* main2 */
  .main2 {
    width: 1060px;
    margin-top: 1500px;
    background-color: white;
    padding: 25px 0 0;
    margin: auto;
  }

  .section1 {
    margin: auto;
  }

  .careerinsite {
    display: flex;
    width: 1060px;
    margin: auto;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .careerinsite_text {
    line-height: 1.33;
    font-weight: 700;
    color: #333;
    font-size: 22px;
  }

  .careerinsite_img button {
    cursor: pointer;
  }

  .insitewrap {
    align-items: center;
    height: 100%;
    display: block;
  }

  .insitewrap_flex {
    display: flex;
  }

  .insiteview {
    margin: 30px 0;
  }

  .insite_button {
    position: relative;
    display: flex;
    max-width: calc(100% - 40px - 8px);
  }

  .insiteview ul {
    display: block;
    width: auto;
    margin-right: -15px;
    font-size: 0;
  }

  .insitemenu_view > li {
    display: inline-block;
    width: calc(25% - 15px);
    padding: 0 15px 10px 0;
    vertical-align: top;
  }

  .insitemenu_view :hover {
    transform: translateY(-1px);
    transition: 0.1s ease-out;
  }

  .insitemenu_view .box {
    cursor: pointer;
  }

  .insitemenu_view > li .box .img {
    overflow: hidden;
    position: relative;
    height: auto;
    padding-bottom: 70%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .insitemenu_view > li .box .img img {
    position: absolute;
    width: 250px;
    height: 175px;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center;
  }

  .insitemenu_view > li .box .info {
    margin-top: 12px;
  }

  .insitemenu_view > li .box .subject {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #171717;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }

  .insitemenu_view > li .box .summary {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 5px;
    color: #8a8a8a;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
  }

  .insitemenu_view > li .box .icon {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  .insitemenu_view > li .box .icon .img_icon img {
    width: 24px;
    height: 24px;
  }

  .insitemenu_view > li .box .icon .icon_name {
    padding-left: 5px;
    color: #8a8a8a;
    font-size: 12px;
  }
`;
