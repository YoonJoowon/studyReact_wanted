import React from "react";
import styled from "styled-components";

function EventNotFound() {
  return (
    <EventNotFoundStyle>
      <div className="wrapper">
        <div class="imageContainer">
          <img
            class="errorImage"
            src="https://static.wanted.co.kr/images/error/lighthouse.png"
            alt="wanted-error"
          >
            <div class="shinyStar">
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
            <div
              class="shinyStar"
            >
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
            <div
              class="shinyStar"
            >
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
            <div
              class="shinyStar"
            >
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
            <div
              class="shinyStar"
            >
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
            <div
              class="shinyStar"
            >
              <div class="shinyStuffOnTop"></div>
              <div class="shinyStuffOnBottom"></div>
            </div>
          </img>
          <h2>PAGE NOT FOUND</h2>
        </div>
      </div>
    </EventNotFoundStyle>
  );
}

export default EventNotFound;

const EventNotFoundStyle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #ffffff;
  top: 0;
  z-index: 1;
  margin: auto;
  position: fixed;
  justify-content: center;
  align-items: center;

  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
    text-align: center;

    .errorImage {
      position: relative;
      max-width: 400px;
      margin: 80px auto 50px;
    }

    .shinyStar {
      /* top: 54%;
      left: 18%;
      margin-top: -76px;
      margin-left: -7px;
      animation-delay: 3s;
      animation-duration: 8s;

      z-index: -1;
      position: absolute;
      width: 32px;
      height: 32px;
      background: #ffc200;
      overflow: hidden;
      opacity: 0;
      -webkit-animation-name: Custom404_shining__IL4Gg;
      animation-name: Custom404_shining__IL4Gg;
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.07, 0.79);
      animation-timing-function: cubic-bezier(0, 0, 0.07, 0.79);
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite; */
    }

    h2 {
      line-height: 1.4;
      word-wrap: break-word;
      margin: 20px 0 15px;
      font-size: 26px;
      font-weight: 600;
      color: #b5b5b5;
    }
  }
`;
