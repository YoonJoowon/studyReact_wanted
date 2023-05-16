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

        <div className="evetInsiteBar">
          <InsiteBar />
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

  .evetInsiteBar{
    margin: auto;
    width: 1060px;
    margin-top: 60px;
  }
`;
