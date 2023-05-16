import React from "react";
import styled from "styled-components";
import InsiteBar from "../containers/InsiteBar";
import InsiteList from "../containers/InsiteList";

function EventFilterBtn() {
  return (
    <EventFilterBtnStyle>
      <button>필터 및 정렬</button>
    </EventFilterBtnStyle>
  );
}

export default EventFilterBtn;

const EventFilterBtnStyle = styled.div`
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
