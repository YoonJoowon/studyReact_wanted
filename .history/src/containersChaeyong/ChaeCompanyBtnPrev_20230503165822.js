import React, { useState } from "react";
import styled from "styled-components";

function ChaeCompanyBtnNext() { 

  return (
    <ChaeCompanyStyle>
    
                  <button
                    type="button"
                    className="subTitleBtn1"
                    aria-label="previous button"
                    disabled=""
                  >
                    <span className="subTitleBtn1_1">
                      <svg className="subTitleBtn1_2" viewBox="0 0 18 18">
                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                      </svg>
                    </span>
                  </button>


                  <button
                    type="button"
                    className="subTitleBtn2"
                    aria-label="next button"
                  >
                    <span className="subTitleBtn2_1">
                      <svg className="subTitleBtn2_2" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span>
                  </button>
                </div>

    </ChaeCompanyStyle>
  );
}

export default ChaeCompanyBtnNext;

const ChaeCompanyStyle = styled.div`
  /* main2 */

  /* main4 */
  .main4 {
    margin: auto;
    width: 1060px;
    height: 430px;
    display: flex;
    margin-bottom: 100px;
  }

  .title00 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 51px;
    padding-top: 36px;
  }

  .main4SubTitle {
    width: 1060px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: auto;
    pointer-events: none;
  }

  .subTitle button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    font-size: 16px;
  }

  .subTitleBtn1 {
    cursor: not-allowed;
    opacity: 0.7;
    color: #ddd;
    border: 1px solid #eee;
    border-radius: 50%;
  }

  .subTitleBtn1_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn1_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }

  .subTitletxt {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9px;
  }

  .subTitletxt1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9px;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: #333;
    text-align: center;
  }

  .subTitletxt1 img {
    width: 24px;
    height: 24px;
  }

  .subTitletxt2 {
    color: #333;
    text-align: center;
    font-weight: 400;
  }

  .subTitleBtn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e2e4;
    border-radius: 50%;
    pointer-events: all;
    width: 36px;
    height: 36px;
  }

  .subTitleBtn2_1 {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .subTitleBtn2_2 {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
  }

  .main4SubTitle2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main4SubTitle2txt {
    padding-top: 2px;
    margin-right: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #767676;
    float: none;
  }

  /* main4 - 테마로 모아보는 오즘 채용 */
  .temaCard_bot {
    margin-top: 50px;
    margin-left: 8px;
  }

  .subCard1_tema_img {
    width: 520px;
    height: 300px;
  }

  .tema_txt {
    width: 520px;
    height: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    word-break: break-all;
  }

  .tema_txt2 {
    width: 520px;
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-top: 8px;
  }

  .tema_txt3 {
    width: 520px;
    height: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    word-break: break-all;
  }

  .tema_txt4 {
    width: 520px;
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-top: 8px;
  }

  .tema_img {
    margin-top: 16px;
    margin-left: 8px;
    display: flex;
    align-items: center;
  }

  .tema_img img {
    display: inline;
    margin-right: 8px;
  }

  .tema_img span {
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }
`;
