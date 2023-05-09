import React from "react";
import SangPosition from "../containersSangse/SangPosition";
import styled from "styled-components";
import MainSlideNextButton from "../components/MainSlideNextButton";
import MainSlidePrevButton from "../components/MainSlidePrevButton";
import SearchListTxt from "./SearchListTxt.json";
import { useState } from "react";
import ChaeFollowBtn from "../containersChaeyong/ChaeFollowBtn";

function Dummy({ id, img, name, job, container, position }) {
  return (
    <li className="companyChu" key={id}>
      <div className="companyChuTop">
        <img src={img} alt=""></img>
        <div className="companyChuTopTxt">
          <p className="companyChuTopCen">{name}</p>
          <p className="companyChuTopBot">{job}</p>
        </div>
        <div className="companyChuTopBtn">
          <ChaeFollowBtn></ChaeFollowBtn>
        </div>
      </div>
      <div className="companyContainerTxt">{container}</div>
      <div className="companyBotTxt">{position}</div>
    </li>
  );
}

function SearchList(props) {
  const [dummys, setdummys] = useState(SearchListTxt);


  // if (!props.location) {
  //   return <div>현재 URL 경로가 정의되지 않았습니다.</div>;
  // }

  
  const [data, setData] = useState("");

  // const { state } = props.locatiom;

  // if (!state) {
  //   // props.location.state가 존재하지 않을 때의 처리
  //   return <div>검색 결과가 없습니다.</div>;
  // }

  const { searchInput } = props.searchInput.state;

  return (
    <SearchhListStyle>
      <div>
        <div className="wrapper">
          <div className="searchInput">
            {data && searchInput}
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
              <div className="SearchLabelBtnNext">
                <MainSlideNextButton></MainSlideNextButton>
              </div>
              <div className="SearchLabelBtnPrev">
                <MainSlidePrevButton></MainSlidePrevButton>
              </div>
            </h2>
            <ul className="searchDummys">
              {dummys.map((dummy) => (
                <Dummy
                  key={dummy.id}
                  img={dummy.img}
                  name={dummy.name}
                  job={dummy.job}
                  container={dummy.container}
                  position={dummy.position}
                />
              ))}
            </ul>
          </div>

          <div className="searchPosition">
            <h2 className="searchPositionTitle">
              포지션<span className="">32</span>
            </h2>

            <div className="searchPositionBtn">
              <button>지역</button>
              <button>경력</button>
              <button>기술스택</button>
              <button>응답률순</button>

              <form action="">
                <input type="text" placeholder="결과 내 재검색"></input>
              </form>
            </div>

            <hr />
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
    margin-top: 100px;
    height: 100%;
    .SearchLabelTitle {
      width: 1060px;
      margin: auto;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      color: #333;
      position: relative;
      display: flex;

      span {
        opacity: 0.5;
        margin-left: 10px;
      }

      .SearchLabelBtnNext {
        position: absolute;
        width: 42px;
        height: 42px;
        border-radius: 21px;
        line-height: 42px;
        border: 1px solid #e1e2e4;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
      }
      .SearchLabelBtnPrev {
        position: absolute;
        width: 42px;
        height: 42px;
        border-radius: 21px;
        line-height: 42px;
        border: 1px solid #e1e2e4;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        margin-left: auto;
        margin-right: 60px;
      }
    }

    /* json */
    .searchDummys {
      width: 1060px;
      margin: auto;
      display: block;
      margin-top: 20px;
    }
    .companyChu {
      width: calc(50% - 65px);
      margin: 10px;
      align-items: center;
      padding: 21px 20px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #f4f4f5;
      display: inline-block;

      .companyChuTop {
        display: flex;
        position: relative;

        img {
          width: 58px;
          height: 58px;
        }
        .companyChuTopTxt {
          margin-left: 10px;
          .companyChuTopCen {
            color: #333;
            font-size: 18px;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: 4px;
          }

          .companyChuTopBot {
            color: #171717;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
          }
        }

        .companyChuTopBtn {
          right: 0;
          position: absolute;
        }
      }

      .companyContainerTxt {
        color: #8a8a8a;
        font-size: 15px;
        line-height: 24px;
        margin-top: 8px;
        height: 48px;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .companyBotTxt {
        color: #36f;
        font-weight: 600;
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }

  .searchPosition {
    width: 1060px;
    margin: auto;
    margin-top: 50px;
    .searchPositionTitle {
      width: 1060px;
      margin: auto;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      color: #333;
      position: relative;
      display: flex;
      span {
        opacity: 0.5;
        margin-left: 10px;
      }
    }

    .searchPositionBtn {
      display: flex;
      position: relative;
      margin-top: 20px;
      button {
        border-radius: 4px;
        border: 1px solid #ececec;
        background-color: #fff;
        font-size: 14px;
        font-weight: 400;
        height: 40px;
        letter-spacing: normal;
        color: #000;
        padding: 0 16px;
        position: relative;
        width: 120px;
        text-align: left;
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      form input {
        position: absolute;
        right: 0;
        width: 150px;
        height: 20px;
        padding: 10px 60px 10px 40px;
        border-radius: 999px;
        border: 1px solid #e1e2e4;
      }
    }
    hr {
      opacity: 0.3;
      margin-top: 30px;
    }
  }
`;
