import React, { useState } from "react";
import SangPositionBtn from "./SangPositionBtn";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SangPosition from "./SangPosition.json";

function Text({ title, intro, introduce }) {
  return (
    <li key={SangPosition.id}>
    <div data-cy="job-card" className="fatureContainer01">
      <SangPositionBtn />
      <img src={SangPosition.image} alt="" />
      <div className="fatureContainer01_body">
        <div className="fatureContainer01_1">
          {SangPosition.title}
        </div>
        <div className="fatureContainer01_2">
          {SangPosition.company}
        </div>
        <div className="fatureContainer01_3">{SangPosition.site}</div>
        <div className="fatureContainer01_4">
          {SangPosition.money}
        </div>
      </div>
    </div>
  </li>
  );
}

function SangPosition() {
 
  const number = useSelector((state) => state.number);
  const [SangPositions, setSangPositions] = useState(SangPosition)   

  return (
    <SangPositionStyle>
      <section className="section5">
        <article className="feature">
          <h2>이 포지션을 찾고 계셨나요?</h2>
          <div className="fatureContainer">
            <ul data-cy="job-list">
              {SangPositions.map((SangPosition) => (
                    <Text
                    key={SangPosition.id}
                    title={SangPosition.title}
                    intro={SangPosition.intro}
                    introduce={SangPosition.introduce}
                  />
              ))}
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

  .fatureContainer01 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
    margin-right: 1200px;
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
