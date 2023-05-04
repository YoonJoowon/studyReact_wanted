import React, { useState } from "react";
import styled from "styled-components";

function Information() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "채용공고",
    },
    {
      id: 2,
      title: "내 프로필",
    },
    {
      id: 3,
      title: "매치업",
    },
    {
      id: 4,
      title: "직군별 연봉",
    },
  ]);

  return (
    <InformationStyle>
      <section className="main5">
        <div className="main5_1">
          <div className="main5_banner">
            <div className="main5_banner_txt">
              <h2>채용 정보를 찾고 계셨나요?</h2>
            </div>
          </div>

          <div className="main5_container">
            <div className="main5_container1">
              <a
                className=""
                data-attribute-id="home__recruit__click"
                data-kind="position"
                href="/wdlist"
              >
                <span className="SvgIcon_SvgIcon__root__8vwon">
                  <svg
                    className="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                  </svg>
                </span>
              </a>
              <div className="main5_container1_txt">
                <button
                  className=""
                  data-attribute-id="home__recruit__click"
                  data-kind="position"
                >
                  <div className="">{articles[0].title}</div>
                  <svg className="" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="main5_container1">
              <a
                className=""
                data-attribute-id="home__recruit__click"
                data-kind="position"
                href="/wdlist"
              >
                <span className="SvgIcon_SvgIcon__root__8vwon">
                  <svg
                    className="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                  </svg>
                </span>
              </a>
              <div className="main5_container1_txt">
                <button
                  className=""
                  data-attribute-id="home__recruit__click"
                  data-kind="position"
                >
                  <div className="">{articles[1].title}</div>
                  <svg className="" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="main5_container1">
              <a
                className=""
                data-attribute-id="home__recruit__click"
                data-kind="position"
                href="/wdlist"
              >
                <span className="SvgIcon_SvgIcon__root__8vwon">
                  <svg
                    className="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                  </svg>
                </span>
              </a>
              <div className="main5_container1_txt">
                <button
                  className=""
                  data-attribute-id="home__recruit__click"
                  data-kind="position"
                >
                  <div className="">{articles[2].title}</div>
                  <svg className="" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="main5_container1">
              <a
                className="RecruitmentQuickMenu_RecruitmentQuickMenu__item__icon__oqlzc"
                data-attribute-id="home__recruit__click"
                data-kind="salary"
                href="/salary"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z"
                    fill="#333"
                  ></path>
                </svg>
              </a>
              <div className="main5_container1_txt">
                <button
                  className=""
                  data-attribute-id="home__recruit__click"
                  data-kind="position"
                >
                  <div className="">{articles[3].title}</div>
                  <svg className="" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InformationStyle>
  );
}

export default Information;

const InformationStyle = styled.div`
  /* main5 */
  .main5 {
    padding: 60px 0 80px;
  }

  .main5_1 {
    max-width: 1060px;
    margin: auto;
  }

  .main5_banner {
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
  }

  .main5_banner_txt {
    text-align: center;

    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .main5_banner_txt h2 {
    text-align: center;
    font-size: 22px;
  }

  .main5_container {
    border: 1px solid #ececec;
    width: 1060px;
    height: 102px;
    display: flex;
  }

  .main5_container1 {
    padding: 18px 0 0;
    border-right: 1px solid #ececec;
    width: 25%;
  }

  .main5_container1 a svg {
    width: 32px;
    height: 32px;
    font-size: 32px;
    display: block;
    margin: auto;
  }

  .main5_container1_txt {
    display: flex;
    margin-top: 20px;
  }

  .main5_container1 button {
    margin: auto;
    display: flex;
  }

  .main5_container1 button svg {
    width: 16;
    height: 16px;
    font-size: 16px;
    align-items: center;
    float: left;
  }
`;
