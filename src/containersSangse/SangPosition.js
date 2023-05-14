import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SangBookMarkCard from "./SangBookMarkCard";
import txt from "./SangPosition.json";

function SangPosition() {
  const [SangPositions, setSangPositions] = useState(txt);

  return (
    <SangPositionStyle>
      <section className="section5">
        <article className="feature">
          <h2>이 포지션을 찾고 계셨나요?</h2>
          <div className="fatureContainer">
            <ul>
              <SangBookMarkCard />
            </ul>
          </div>
        </article>
      </section>
    </SangPositionStyle>
  );
}

export default SangPosition;

const SangPositionStyle = styled.div`
  /* feature */
  .feature {
    width: 1060px;
    padding: 70px 0px;
    margin: auto;
    margin-bottom: 20px;
    height: 1000px;
  }

  .feature h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    color: #111;
    margin-bottom: 30px;
  }

  .fatureContainer {
    margin: auto;
  }

  .fatureContainer ul {
    margin: -10px;
    margin: auto;
  }

  .fatureContainerCard {
    position: relative;
    width: 250px;
    display: inline-block;
    margin: 5px;
  }

  .fatureContainer ul li {
    padding: 5px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    width: 250px;
    margin-bottom: 30px;
  }

  .fatureContainer ul li img {
    width: 250px;
    height: 187.5px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    /* padding-bottom: 75%; */
    position: relative;
    background-size: cover;
  }

  .fatureContainer01 {
    display: block;
    position: relative;
  }

  .fatureContainer01 button {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
    margin-right: 1200px;
    cursor: pointer;
  }

  .fatureContainer01_body {
    width: 250px;
  }

  .fatureContainer01_1 {
    text-overflow: ellipsis;
    position: relative;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    word-break: break-word;
    width: 250px;
    margin-right: 0px;
    margin-top: 10px;
  }

  .fatureContainer01_2 {
    font-size: 14px;
    line-height: normal;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
    color: #333;
    font-weight: 600;
  }

  .fatureContainer01_3 {
    font-size: 14px;
    line-height: normal;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }

  .fatureContainer01_4 {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
