import React from "react";
import styled from "styled-components";
import searchTxt from "./Search.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Text({ id, title }) {
  return (
    <li key={id} className="">
      <span>{title}</span>
    </li>
  );
}

function Text2({ id, title, rank }) {
  return (
    <li key={id} className="searchResults_item">
      <div className="rankingSearch">
        <span className="rankingSearch1">{rank}</span>
        <span className="rankingSearch1_job">{title}</span>
        <span className="rankingSearch1Change">-</span>
      </div>
    </li>
  );
}

function Search(props) {
  const [search1, setsearch1] = useState(searchTxt.searchTxt1);
  const [search2, setSearch2] = useState(searchTxt.searchTxt2);

  // 검색
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const navigate = useNavigate();

  // 모달창 끄기
  const closeSearch = () => {
    props.setSearchOpen(false);
  };

  // 엔터키 눌러도 검색리스트 실행
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      closeSearch();
      navigate("/SearchList", {
        state: { searchInput: searchInput },
      });
    }
  };

  return (
    <SearchStyle>
      <div className="searchWrapper">
        <div className="searchWrapperContainer">
          <div className="serchBarClose">
            <button onClick={closeSearch} id="searchClose" type="button">
              X
            </button>
          </div>

          <div className="searchBar">
            <div className="searchInputContainer">
              <form role="presentation" action=".">
                <input
                  className="searchInput"
                  type="search"
                  placeholder="검색어를 입력해 주세요."
                  id="searchInput"
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="searchIcon"
                  type="button"
                  onClick={() => {
                    closeSearch();
                    navigate("/SearchList", {
                      state: { searchInput: searchInput },
                    });
                  }}
                >
                  <svg className="" viewBox="0 0 24 24">
                    <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="container" role="presentation">
            <h4 className="searchResults">추천 검색어</h4>
            <ul className="searchResults_wrapper">
              {search1.map((search) => (
                <Text key={search.id} id={search.id} title={search.title} />
              ))}
            </ul>

            <h4 className="rankingUpdate">
              인기 검색어
              <span className="rankingUpdateTime">16:00 기준</span>
            </h4>

            <ul>
              {search2.map((search) => (
                <Text2
                  key={search.id}
                  title={search.title}
                  rank={search.rank}
                />
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
  width: 100%;
  height: 50px;

  display: flex;
  background-color: #ffffff;
  top: 0;
  z-index: 5;
  margin: auto;
  position: fixed;
  justify-content: center;
  align-items: center;

  .searchWrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }

  .searchWrapperContainer {
    width: 700px;
    height: 1250px;
    margin: auto;
  }

  .serchBarClose {
    width: 700px;
    height: 32px;
    margin: 30px 0 30px;
    font-size: 30px;
    color: #e1e2e4;
    text-align: right;
    button {
      cursor: pointer;
    }
  }

  .searchBar {
    width: 700px;
    height: 56px;
    margin: auto;
    position: relative;

    form {
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
      }
      .searchIcon {
        position: absolute;
        top: 55%;
        left: 24px;
        transform: translateY(-50%);
        cursor: pointer;
        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .searchResults {
    display: flex;
    font-weight: 600;
    font-size: 18px;
    line-height: 144.5%;
    color: #171717;
    margin-top: 40px;
    margin-bottom: 24px;
  }

  .searchResults_wrapper {
    li {
      position: relative;
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      color: #171717;
      background-color: rgba(112, 115, 124, 0.08);
      padding: 0 16px;
      border-radius: 999px;
      margin: 7px 6px;
      max-width: 200px;
      text-align: center;

      /* button {
        margin: auto;
      } */
    }
  }

  .rankingUpdate {
    display: flex;
    font-weight: 600;
    font-size: 18px;
    color: #171717;
    margin-top: 40px;
    margin-bottom: 24px;

    .rankingUpdateTime {
      font-weight: 400;
      font-size: 14px;
      color: #8a8a8a;
      margin-left: 12px;
    }
  }

  .searchResults_item {
    display: inline-block;
    width: 50%;

    .rankingSearch {
      display: flex;
      align-items: center;
      height: 24px;
      margin-bottom: 16px;
      font-size: 13px;
      padding-right: 20px;

      .rankingSearch1 {
        display: inline-block;
        text-align: left;
        font-weight: 500;
        width: 20px;
        flex-shrink: 0;
      }

      .rankingSearch1_job {
        margin-right: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .rankingSearch1Change {
        font-size: 14px;
        color: #8a8a8a;
      }
    }
  }
`;
