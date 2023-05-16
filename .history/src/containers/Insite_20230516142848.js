import React, { useState } from "react";
import InsiteBar from "./InsiteBar";
import InsiteTxt from "./Insite.json";
import styled from "styled-components";
import InsiteList from "./InsiteList";

function Txt({ id, image, title, summary }) {
  return (
    <li key={id}>
      <div className="box">
        <div className="img">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="info">
          <p className="subject">{title}</p>
          <p className="summary">{summary}</p>
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
  );
}

function Insite() {
  const [articles, setArticles] = useState(InsiteTxt);

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
            <InsiteList></InsiteList>
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
    /* display: flex;
    width: 1060px;
    margin: auto;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center; */
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
`;
