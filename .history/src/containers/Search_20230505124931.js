import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Search() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "#연봉상위2~5%",
    },
    {
      id: 2,
      title: "#퇴사율5%이하",
    },
    {
      id: 3,
      title: "#재택근무",
    },
    {
      id: 4,
      title: "#주4일근무",
    },
    {
      id: 5,
      title: "#주35시간",
    },
  ]);

  const [search, setSearch] = useState([
    {
      id: 1,
      title: "UIUX디자이너",
      rank: "1",
    },
    {
      id: 2,
      title: "uiux 디자이너",
      rank: "2",
    },
    {
      id: 3,
      title: "퍼블리셔",
      rank: "3",
    },
    {
      id: 4,
      title: "데이터 분석가",
      rank: "4",
    },
    {
      id: 5,
      title: "데이터 분석",
      rank: "5",
    },
    {
      id: 6,
      title: "보안",
      rank: "6",
    },
    {
      id: 7,
      title: "정보보안",
      rank: "7",
    },
    {
      id: 8,
      title: "서비스기획",
      rank: "8",
    },
  ]);

  return (
    <SearchStyle>
      <div className="searchWrapper">
        <div className="searchWrapperContainer">
          <div className="serchBarClose">
            <button type="button">
              <span class="SvgIcon_SvgIcon__root__8vwon SearchBar_CloseIcon__lg6nj">
                <svg
                  class="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.93289 4.6068C5.56201 4.33162 5.03569 4.36219 4.69935 4.69853C4.32938 5.0685 4.32938 5.66834 4.69935 6.03831L10.6611 12L4.69935 17.9617L4.60763 18.0679C4.33244 18.4388 4.36302 18.9651 4.69935 19.3015L4.80561 19.3932C5.17649 19.6684 5.7028 19.6378 6.03914 19.3015L12.0009 13.3402L17.9626 19.3015L18.0688 19.3932C18.4397 19.6684 18.966 19.6378 19.3023 19.3015C19.6723 18.9315 19.6723 18.3317 19.3023 17.9617L13.3406 12L19.3023 6.03831L19.3941 5.93206C19.6693 5.56118 19.6387 5.03487 19.3023 4.69853L19.1961 4.6068C18.8252 4.33162 18.2989 4.36219 17.9626 4.69853L12.0009 10.6598L6.03914 4.69853L5.93289 4.6068Z"></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="searchBar">
            <div className="searchInputContainer">
              <form role="presentation" action=".">
                <input
                  className="searchInput"
                  type="search"
                  placeholder="검색어를 입력해 주세요."
                  autocomplete="off"
                  value=""
                />
                <span className="searchIcon">
                  <svg className="" viewBox="0 0 24 24">
                    <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                  </svg>
                </span>
              </form>
            </div>
          </div>

          <div className="container" role="presentation">
            <h4 className="searchResults">추천 검색어</h4>
            <ul className="searchResults_wrapper">
              {articles.map((article) => (
                <li key={article.id} className="searchResults_item">
                  <button>{article.title}</button>
                </li>
              ))}
            </ul>

            <h4 className="rankingUpdate">
              인기 검색어
              <span className="rankingUpdateTime">16:00 기준</span>
            </h4>

            <ul>
              {search.map((search) => (
                <li key={search.id} className="searchResults_item">
                  <li className="rankingSearch">
                    <span className="rankingSearch1">{search.rank}</span>
                    <span className="rankingSearch1_job">{search.title}</span>
                    <span className="">-</span>
                  </li>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SearchStyle>
  );
}

export default Search;

const SearchStyle = styled.div`
  .searchWrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }

  .searchWrapperContainer {
    width: 700px;
    height: 1250px;
    margin: auto;
  }

  .serchBarClose {
    width: 32px;
    height: 32px;
    background-color: red;
  }

  .searchBar {
    width: 660px;
    height: 56px;
    margin: auto;

    form {

      position: relative;


      .searchInput {
        height: 56px;
        width: 100%;
        margin: 0;
        padding: 0 55px 0 56px;
        border: 1px solid #e1e2e4;
        border-radius: 999px;
        font-size: 18px;
        font-weight: 500;
        color: #171717;
        background: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        appearance: none;
      }
      .searchIcon{
        position: absolute;
        left: 0;
        justify-items: center
        ;
      }


    }

  }

  .searchIcon svg {
    height: 20px;
    width: 20px;
  }
`;
