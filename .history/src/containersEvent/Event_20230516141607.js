import React from "react";
import styled from "styled-components";
import InsiteBar from "../containers/InsiteBar";

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

        <div className="eventList">
          <div className="evetInsiteBar">
            <h2>다양한 커리어 관련 이벤트를 만나보세요!</h2>
            <InsiteBar />
          </div>

          <hr/>

          <div className="eventTrigger">
            <button>
              필터 및 정렬
            </button>
          </div>
        </div>
      </div>
    </EventStyle>
  );
}

export default Event;

const EventStyle = styled.div`
  .eventBanner img {
    margin-top: 50px;
    width: 1670px;
    height: 300px;
  }

  .eventList {
    margin: auto;
    width: 1060px;
    margin-top: 60px;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 127.3%;
      letter-spacing: -0.012em;
      color: #171717;
      max-width: 1060px;
      width: 90%;
      margin-bottom: 20px;
    }

    hr{
      opacity: 0.3;

    }
    .eventTrigger{

    }


  }
`;
