import React, { useState } from "react";
import styled from "styled-components";

function CloseX(props) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };
  

  return visible ? (
    <Baner00Style>
      <div>
        <div class="banner00">
          <button onClick={handleClick}>X</button>
          <div class="banner00_container">
            <div class="banner00_txt1">
              즐겨보는 크리에이터의 글도 추천하고 싶다면?
            </div>
            <div class="banner00_txt2">
              크리에이터 추천하기{" "}
              <svg
                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 18 18"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </div>
          </div>

          <div>
            <img
              class="banner00_img"
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90"
              alt="크리에이터 추천하기"
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </Baner00Style>
  ) : null;
}

export default CloseX;

const Baner00Style = styled.div`

.banner00{
    background: #fff;
    border: 1px solid #e1e2e4;
    box-shadow: 4px 4px 15px rgba(0,0,0,.05);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 27px;
    gap: 27px;
    position: relative;

    width: 1060px;
    height: 119px;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 60px;

}

.banner00 button{
    position: absolute;
    right: 8px;
    top: 8px;
    font-size: 15px;
    cursor: pointer;

}


.banner00_container{
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: left;
}

.banner00_txt1{
    word-break: keep-all;
    font-weight: 600;
    font-size: 20px;
    line-height: 141.2%;
    color: #171717;
}

.banner00_txt2{
    color: #3366FF;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: .0056em;
    padding: 4px 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.banner00_txt2 svg{
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
}

.banner00_img{
    width: 112px;
}

.banner00_btn{
    position: absolute;
    right: 13px;
    top: 13px;
    font-size: 20.5px;
    color: #ccc;
    cursor: pointer;
}

.banner00_btn1{
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
}

.banner00_btn_img svg{
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
}
`;