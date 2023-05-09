import React from "react";
import SangPosition from "../containersSangse/SangPosition";
import styled from "styled-components";
import { useEffect } from "react";

function SearchList(props) {
  return (
    <SearchhListStyle>
      <div>
        <div className="wrapper">
          <div className="searchInput">
            개발
            <hr />
          </div>

          <div className="searchCategory">
            <h2 className="searchCategoryTitle">
              연관 직무<span className="">5</span>
            </h2>
            <div className="searchCategoryTitleList">
              <a href="/wdlist/518" className="" aria-label="categoty tag">
                개발
              </a>
              <a
                href="/wdlist/532/10150"
                className=""
                aria-label="categoty tag"
              >
                바이어관리·상담·개발
              </a>
              <a
                href="/wdlist/10057/10153"
                className=""
                aria-label="categoty tag"
              >
                식품가공·개발
              </a>
              <a href="/wdlist/518/873" className="" aria-label="categoty tag">
                웹 개발자
              </a>
              <a href="/wdlist/959/878" className="" aria-label="categoty tag">
                유니티 개발자
              </a>
            </div>
          </div>

          <div className="searchLabel">
            <h2 className="SearchLabelTitle">
              회사<span className="">152</span>
              <button
                className="ArrowBtn_container__oo2k5 ArrowBtn_prevBtn__8yDaX"
                type="button"
                disabled=""
              >
                <svg
                  width="16"
                  height="16"
                  className="ArrowBtn_arrowIcon__zOwRj"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="currentColor"
                    d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                  ></path>
                </svg>
              </button>
              <button className="ArrowBtn_container__oo2k5" type="button">
                <svg
                  width="16"
                  height="16"
                  className="ArrowBtn_arrowIcon__zOwRj"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="currentColor"
                    d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
                  ></path>
                </svg>
              </button>
            </h2>
          </div>

          <div className="searchPosition">
            <h2 className="searchPositionTitle">
              포지션<span className="">3342</span>
            </h2>

            <button>지역</button>
            <button>경력</button>
            <button>기술스택</button>
            <button>응답률순</button>

            <form action="">
              <input type="text"></input>
            </form>
          </div>

          <SangPosition />
        </div>
      </div>
    </SearchhListStyle>
  );
}

export default SearchList;

const SearchhListStyle = styled.div`
  .searchInput {
    position: relative;
    width: 100%;
    height: 160px;
    background: #fff;
    z-index: 1;
    text-align: center;
    font-size: 40px;
    margin-top: 120px;

    hr {
      width: 1060px;
      margin-top: 50px;
      opacity: 0.3;
    }
  }

  .searchCategory {
    width: 1060px;
    margin: auto;

    .searchCategoryTitle {
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      color: #333;

      span {
        opacity: 0.5;
        margin-left: 10px;
      }
    }

    .searchCategoryTitleList {
      margin-top: 20px;
      a {
        display: inline-block;
        background-color: #fff;
        text-align: center;
        padding: 0 18px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #e1e2e3;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 400;
        color: #333;
        margin: 0 6px 6px 0;
        text-decoration: none;
      }
    }
  }
  .searchLabel {
    width: 1060px;
    margin: auto;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #333;
  }
`;
