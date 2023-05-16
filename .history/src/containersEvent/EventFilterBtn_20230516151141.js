import React from "react";
import styled from "styled-components";

function EventFilterBtn() {
  return (
    <EventFilterBtnStyle>
      <button>필터 및 정렬</button>
    </EventFilterBtnStyle>
  );
}

export default EventFilterBtn;

const EventFilterBtnStyle = styled.div`
  display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
`;
