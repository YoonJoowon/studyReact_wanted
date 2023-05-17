import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import InsiteBar from "../containers/InsiteBar";
import InsiteList from "../containers/InsiteList";
import EventFilterBtn from "./EventFilterBtn";
import EventKetwordBtn from "./EventKetwordBtn";

function Event() {

  useEffect(() => {
    function handleScroll() {
      const eventList = document.querySelector(".eventList");
      const rect = eventList.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        eventList.classList.add("sticky");
      } else {
        eventList.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <EventBanner>
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-marketing-image.s3.ap-northeast-2.amazonaws.com%2Fcareer-biz-banner%2F20230511_eventhome_web.jpg&amp;w=2000&amp;q=100"
          alt=""
        />
      </EventBanner>

      <EventInsiteBar>
        <h2>다양한 커리어 관련 이벤트를 만나보세요!</h2>
      </EventInsiteBar>

      <EventList>
        <div className="eventTrigger">
          <InsiteBar />
          <hr />
          <div className="eventTriggerBtn">
            <EventFilterBtn></EventFilterBtn>
            <EventKetwordBtn></EventKetwordBtn>
          </div>
        </div>
      </EventList>
      <EventCardListWrapper>
        <div className="eventCardList">
          <InsiteList />
          <InsiteList />
        </div>
      </EventCardListWrapper>
    </Wrapper>
  );
}

export default Event;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const EventBanner = styled.div`
  margin-top: 50px;
  background-repeat: no-repeat;
  background-size: contain;

  img {
    width: 100%;
    height: 100%;
  }
`;

const EventInsiteBar = styled.div`
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
`;

const EventList = styled.div`
  margin: auto;
  width: 1060px;
  height: 150px;
  margin-top: 20px;
  position: sticky;
  top: 0;

  .eventTrigger {
    z-index: 2;
    background-color: #fff;

    hr {
      opacity: 0.3;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .eventTriggerBtn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
    }
  }
`;

const EventCardListWrapper = styled.div`
  width: 1060px;
  margin: auto;
  height: 100%;
  margin-top: 50px;
  position: relative;

  .eventCardList {
    height: 100%;
  }
`;
