import React, { useState } from "react";
import styled, { css } from "styled-components";
import InsiteBar from "../containers/InsiteBar";
import InsiteList from "../containers/InsiteList";
import EventFilterBtn from "./EventFilterBtn";
import EventKetwordBtn from "./EventKetwordBtn";

function Event() {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", function () {
    const scrollingContainer = document.querySelector(".eventList");
    const threshold = 390; // 스크롤 임계값

    if (scrollingContainer && window.scrollY > threshold) {
      scrollingContainer.classList.add("fixed");
    } else if (scrollingContainer) {
      scrollingContainer.classList.remove("fixed");
    }
  });
  return (
    <EventStyle>
      <div className="wrapper">
        <div className="eventBanner">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-marketing-image.s3.ap-northeast-2.amazonaws.com%2Fcareer-biz-banner%2F20230511_eventhome_web.jpg&amp;w=2000&amp;q=100"
            alt=""
          />
        </div>

        <div className="evetInsiteBar">
          <h2>다양한 커리어 관련 이벤트를 만나보세요!</h2>
        </div>

        <div className={isFixed ? "eventList.fixed" : "eventList"}>
          <div className="eventTrigger">
            <InsiteBar />
            <hr />
            <div className="evnetTriggerbtn">
              <EventFilterBtn></EventFilterBtn>
              <EventKetwordBtn></EventKetwordBtn>
            </div>
          </div>
        </div>

        <div className="eventCardListWrapper">
          <div className="eventCardList">
            <InsiteList />
            <InsiteList />
          </div>
        </div>
      </div>
    </EventStyle>
  );
}

export default Event;

const EventStyle = styled.div`
  .wrapper {
    height: 100%;
    position: relative;

    .eventBanner {
      margin-top: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      max-width: 100%;

      img {
        width: 100%;
        height: 300px;
      }

      @media (min-width: 700px) and (max-width: 1100px) {
        .eventBanner {
          width: 1100px;
          height: 300px;
        }
      }

      @media (max-width: 700px) {
        .eventBanner {
          height: 300px;
        }
      }
    }

    .evetInsiteBar {
      width: 1060px;
      margin: auto;
      height: 100%;
      margin-top: 50px;
      position: relative;

      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 127.3%;
        letter-spacing: -0.012em;
        color: #171717;
        max-width: 1060px;
        width: 90%;
      }
    }

    .eventList {
      margin: auto;
      width: 1060px;
      margin-top: 20px;
      top: 0;
      /* height: 123px; */

      .eventTrigger {
        background-color: #fff;
        hr {
          opacity: 0.3;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .evnetTriggerbtn {
          display: flex;
          justify-content: space-between;
          width: 100%;
          background-color: #fff;
        }
      }
    }

    .eventList.fixed {
      position: fixed;
      width: 100%;
      margin: auto;
      background-color: #fff;
      margin-top: 50px;
      z-index: 2;
      border-bottom: #3449ff 1px solid;

      .eventTrigger {
        margin: auto;
        width: 1060px;
        margin-top: 20px;
        padding-bottom: 20px;
      }
    }

    .eventCardListWrapper {
      width: 1060px;
      margin: auto;
      height: 100%;
      margin-top: 20px;
      position: relative;

      .eventCardList {
        height: 100%;
      }
    }
  }
`;
