import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterList from "./FilterList";
import TagFilter from "./TagFilter";
import { Link } from "react-router-dom";
import ListContainer from "../common/ListContainer";
import companyList from "./db/companyList.json";
import { device } from "../styled";

export default function JobListContent() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);
  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
  };

  return (
    <JobListContentWrapper scroll={scroll}>
      <div>
        <div>
          <div className="empty"></div>
          <FilterListWrapper className={scroll ? "fixedTop" : ""}>
            <FilterList></FilterList>
            <Divider></Divider>
            <TagFilter></TagFilter>
          </FilterListWrapper>
        </div>

        <DividerStyle></DividerStyle>

        <BookmarkSection>
          <div className="bookmarkTop">
            <button>
              <svg width="13" height="17" viewBox="0 0 13 17" className="icon">
                <path
                  fill="#36f"
                  d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
                ></path>
              </svg>
              <span className="bookmark">북마크 모아보기</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="arrowicon"
              >
                <path
                  fill="#36f"
                  d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                ></path>
              </svg>
            </button>
            <div className="jobSortBtn">
              <div className="jobsort-selector">
                <button onClick={handleSelect}>
                  <span>응답률순</span>
                  <svg
                    className={isSelect ? "selected" : ""}
                    width="8"
                    height="8"
                    viewBox="0 0 8 7"
                  >
                    <path
                      fill="#333"
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    ></path>
                  </svg>
                </button>
                {isSelect ? (
                  <ul>
                    <SelectLi title="최신순"></SelectLi>
                    <SelectLi title="보상금순"></SelectLi>
                    <SelectLi title="인기순"></SelectLi>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </BookmarkSection>

        <div className="featuredlistContainer">
          <h3>적극 채용 중인 회사</h3>

          <FeaturedList>
            {companyList.map((list, index) => {
              return (
                <CompanyItem
                  id={list.title}
                  title={list.name}
                  position={list.position}
                  url={list.url}
                  thumbnail={list.thumbnailUrl}
                  key={index}
                />
              );
            })}
          </FeaturedList>
        </div>

        <ListContainer></ListContainer>
      </div>
    </JobListContentWrapper>
  );
}
const CompanyItem = (props) => {
  return (
    <ItemWrapper url={props.url} thumbnail={props.thumbnail}>
      <Link to="/">
        <header>
          <div className="bgImg"></div>
        </header>
        <footer>
          <div className="logoImg"></div>
          <h4>{props.title}</h4>
          <h5>{props.position}개 포지션</h5>
        </footer>
      </Link>
    </ItemWrapper>
  );
};
const ItemWrapper = styled.div`
  width: 197px;
  header {
    border-radius: 3px 3px 0 0;
    @media all and ${device.medium} {
      margin 0 9px;
    }
    @media all and ${device.small} {
      margin: 0 5px;
      height: 0;
      padding-bottom: 65%;
    }
  }
  .bgImg {
    background-image: url(${(props) => props.url});
    height: 147px;
    border-radius: 3px 3px 0 0;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    @media all and ${device.medium} {
      height: 120px;
    }
    @media all and ${device.small} {
      width: 140px;
      height: 100px;
    }
  }
  footer {
    padding: 34px 16px 0;
    height: 124px;
    border: 1px solid #e1e2e3;
    border-top: none;
    border-radius: 0 0 3px 3px;
    position: relative;
    @media all and ${device.medium} {
      height: 110px;
      margin: 0 9px;
    }
    @media all and ${device.small} {
      margin: 0 5px;
    }
  }
  .logoImg {
    background-image: url(${(props) => props.thumbnail});
    background-size: contain;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: -25px;
    left: 16px;
    width: 50px;
    height: 50px;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: 0;
    z-index: 0;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  }
  h4 {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.3px;
    color: #333;
    line-height: 1.2;
    margin: 4px 0;
    overflow: hidden;
    max-height: 58px;
  }
  h5 {
    font-size: 14px;
    font-weight: 400;
    letter-spacint: -0.2px;
    color: #999;
    margin-top: 6px;
  }
`;
const FilterListWrapper = styled.div`
  top: 50px;
  margin-bottom: 25px;
  padding-top: 10px;
`;

const JobListContentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0 80px;
  width: 87.72%;
  position: relative;
  max-width: 1060px;
  @media all and ${device.small} {
    padding: 20px;
    width: 100%;
  }
  .fixedTop {
    position: fixed;
    background: #fff;
    z-index: 2;
    padding: 20px 0 25px !important;
    border-bottom: 1px solid #36f;
  }
  .empty {
    height: 60px;
    display: ${(props) => (props.scroll ? "block" : "none")};
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.3px;
    color: #333;
    margin: 20px 0 14px;
    @media all and ${device.small} {
      font-size: 18px;
      margin: 0;
    }
  }
`;
const Divider = styled.hr`
  max-width: 1060px;
  margin: 25px auto;
  background-color: rgba(236, 236, 236, 0.7);
  height: 1px;
  border: none;
  flex-shrink: 0;
  @media all and ${device.small} {
    display: none;
  }
`;
const DividerStyle = styled.hr`
  width: 100vw;
  margin-bottom: 38px;
  margin-left: calc(-50vw + 50%);
  background-color: #e1e2e3;
  height: 1px;
  border: none;
  flex-shrink: 0;
  @media all and ${device.small} {
    height: 8px;
    border-top: 1px solid #ececec;
    margin-top: 10px;
    background-color: #f7f7f7;
  }
`;
const BookmarkSection = styled.div`
  margin-bottom: 12px;
  button {
    display: flex;
    align-items: center;
    line-height: 24px;
    color: #36f;
  }
  .icon {
    width: 11px;
    height: 16px;
    margin-right: 8px;
    color: grb(51, 102, 255);
  }
  .bookmark {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    @media all and ${device.small} {
      line-height: 40px;
    }
  }
  .arrowicon {
    width: 10px;
    margin: 0 0 0 2px;
    height: 16px;
  }
  .bookmarkTop {
    display: flex;
    justify-content: space-between;
    .jobSortBtn {
      display: none;
      width: 104px;
      height: 40px;
      position: relative;
      @media all and ${device.small} {
        display: block;
      }
    }
    .jobsort-selector > button {
      border-radius: 4px 4px 0 0;
      border: 1px solid #ececec;
      background-color: #fff;
      font-size: 14px;
      font-weight: 400;
      height: 40px;
      color: #000;
      padding: 0 16px;
      position: relative;
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      letter-spacing: normal;
    }
    .jobsort-selector > button > span {
      margin-right: 8px;
    }
    .selected {
      transform: rotate(180deg);
      transition: 0.3s;
    }

    ul {
      z-index: 98;
      position: absolute;
      top: 39px;
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid #ececec;
      border-radius: 0 0 4px 4px;
    }
  }
`;

const FeaturedList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1060px;
  margin-bottom: 40px;
  position: relative;
  margin-left: 0;
  margin-right: 0;
  @media all and ${device.medium} {
    margin-left: -9px;
    margin-right: -4.5px;
  }
  @media all and ${device.small} {
    padding: 10px 0;
    margin-right: -5px;
    margin-left: -5px;
    overflow-y: scroll;
  }
`;
const SelectLi = (props) => {
  return (
    <SelectList>
      <button>{props.title}</button>
    </SelectList>
  );
};
const SelectList = styled.li`
  button {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: #333;
    text-align: left;
    padding: 0 0 0 16px;
    border-bottom: 1px solid #ececec;
  }
`;
