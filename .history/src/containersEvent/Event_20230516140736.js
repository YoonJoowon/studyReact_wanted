import React from "react";
import styled from "styled-components";
import InsiteBar from "../containers/InsiteBar";

function Event() {
  return (
    <EventStyle>
      <div className="wrapper">
        <div className="eventBanner">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2…-banner%2F20230511_eventhome_web.jpg&w=2000&q=100"
            alt=""
          />
        </div>

        <InsiteBar />
      </div>
    </EventStyle>
  );
}

export default Event;

const EventStyle = styled.div`
  .eventBanner {
    width: 1670px;
    height: 300px;
  }
`;
