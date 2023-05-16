import React from "react";
import styled from "styled-components";
import InsiteBar from "../containers/InsiteBar";
import InsiteList from "../containers/InsiteList";
import EventFilterBtn from "./EventFilterBtn";
import EventKetwordBtn from "./EventKetwordBtn";

function Event() {
  return (
    <EventStyle>
      <div className="wrapper">
        <div className="eventBanner">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-marketing-image.s3.ap-northeast-2.amazonaws.com%2Fcareer-biz-banner%2F20230511_eventhome_web.jpg&amp;w=2000&amp;q=100"
            alt=""
          />
        </div>

        <div className="insitewrap">
          <div className="evetInsiteBar">
            <h2>다양한 커리어 관련 이벤트를 만나보세요!</h2>
          </div>
          <div className="eventList">
            <div className="eventTrigger">
              <InsiteBar />
              <hr />

              <EventFilterBtn></EventFilterBtn>
              <EventKetwordBtn></EventKetwordBtn>
            </div>
          </div>

          <InsiteList />
          <InsiteList />
        </div>
      </div>
    </EventStyle>
  );
}

export default Event;

const EventStyle = styled.div`
  .wrapper {
    height: 100%;
  }
  .eventBanner {
    margin-top: 50px;
    background-repeat: no-repeat;
    background-size: contain;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .insitewrap {
    width: 1060px;
    margin: auto;
    min-height: 100%;
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

    .eventList {
      margin: auto;
      width: 1060px;
      height: auto;
      height: 100%;
      margin-top: 20px;

      .eventTrigger {
        position: sticky;
        top: 50px;
        z-index: 2;
        background-color: #fff;

        hr {
          opacity: 0.3;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
