import React, { useState } from "react";

function Chaeslide(){
  return (
    <div>
      <section className="main1">
        <article className="slide">
          <div className="slideImg">
            <div id="slideShow">
              <ul className="slides">
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100"
                    alt="당신의 모빌리티 파트너, TMAP"
                    className="Image_Image__image__Y2rLN"
                  />
                  <div className="subSlide">
                    <h2>복지는 좋은데, 커리어는?</h2>
                    <h3>유명 IT기업 개발자가 선택한 회사</h3>
                    <hr className="subSlide01" />
                    <a
                      href="/company/1571"
                      className="subSlide02"
                      aria-label=""
                    >
                      <span className="subSlide03">
                        바로가기
                        <span className="subSlide04"></span>
                        <span className="subSlide05">
                          <svg className="subSlide06" viewBox="0 0 18 18">
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </li>
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2008%2F75ffb8c1.jpg&amp;w=1060&amp;q=100"
                    alt="프롭테크의 선두주자 SK D&amp;D"
                    className="Image_Image__image__Y2rLN"
                  />
                </li>
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100"
                    alt="흔들림 없이 성장하니까,"
                    className="Image_Image__image__Y2rLN"
                  />
                </li>
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100"
                    alt="당신의 모빌리티 파트너, TMAP"
                    className="Image_Image__image__Y2rLN"
                  />
                </li>
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100"
                    alt="'100억' 투자받은 XYZ"
                    className="Image_Image__image__Y2rLN"
                  />
                </li>
                <li>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100"
                    alt="프리온보딩 프론트엔드 인턴십 (4월)"
                  />
                </li>
              </ul>
              <p className="controller">
                <button
                  type="button"
                  className="prev"
                  aria-label="previous button"
                >
                  <span className="">
                    <svg
                      className="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 18 18"
                    >
                      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                  </span>
                </button>

                <button type="button" className="next" aria-label="next button">
                  <span className="">
                    <svg
                      className="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Chaeslide;


    /* subcard1 */
  //   .subcard00{
  //     display: flex;
  //     margin-top: 20px;
  // }

  // .subCard1{
  //     border: 1px solid black;
  //     width: 540px;
  //     height: 350px;
  //     padding: 10px;
  // }

  // .subCard1_img00{
  //     width: 520px;
  //     height: 270px;
  //     -webkit-box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  //     box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  //     margin: 10px;

  // }

  // .subCard1_img{
  //     border-radius: 4px;
  //     width: 520px;
  //     height: 270px;
  //     object-fit: cover;
      
  // }

  // .subCard1_bot{
  //     display: flex;
  //     align-items: flex-start;
  //     justify-content: space-between;
  //     margin: 10px;
  //     margin-top: 17px;
  // }

  // .subCard1_bot_img{
  //     height: 21px;
  // }


  // .subCard1_bot_txt{
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     font-style: normal;
  //     line-height: normal;
  //     letter-spacing: normal;
  //     margin-right: 250px;
  // }

  // .subCard1_txt{
  //     width: 93px;
  //     height: 20px;
  //     font-size: 18px;
  //     font-weight: 700;
  //     color: #333;
  //     word-break: break-all;
  // }

  // .subCard1_txt2{
  //     width: 93px;
  //     height: 16px;
  //     font-size: 14px;
  //     font-weight: 500;
  //     color: #999;
  //     margin-top: 4px;

  // }

  // .subCard1_btn{
  //     height: 40px;
  //     color: #36f;
  //     background-color: #fff;
  //     position: relative;
          
  //     display: inline-flex;
  //     align-items: center;
  //     justify-content: center;
  //     vertical-align: middle;
  //     min-width: 64px;
  //     padding: 0 27px;
  //     box-sizing: border-box;
  //     border-radius: 25px;
  //     font-size: 16px;
  //     font-weight: 700;
  //     line-height: normal;
  //     border: none;
  //     background-color: none;
  //     cursor: pointer;
  //     border: 1px solid #e1e2e3;
  //     padding: 12px 25.5px 11px;
  //     line-height: 1;
  // }

  // .subCard1_btn p{
  //     width: 100%;
  //     font-size: inherit;
  //     font-weight: inherit;
  //     display: inherit;
  //     -ms-flex-align: inherit;
  //     align-items: inherit;
  //     -ms-flex-pack: inherit;
  //     justify-content: inherit;
  //     color: inherit;
  // }


  // /* subcard2 */
  // .subCard2{
  //     border: 1px solid black;
  //     width: 540px;
  //     height: 350px;
  //     padding: 10px;
  // }

  // .subCard2_img00{
  //     width: 520px;
  //     height: 270px;
  //     -webkit-box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  //     box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
  //     margin: 10px;

  // }

  // .subCard2_img{
  //     border-radius: 4px;
  //     width: 520px;
  //     height: 270px;
  //     object-fit: cover;
      
  // }

  // .subCard2_bot{
  //     display: flex;
  //     align-items: flex-start;
  //     justify-content: space-between;
  //     margin: 10px;
  //     margin-top: 17px;
  // }

  // .subCard2_bot_img{
  //     height: 21px;
  // }


  // .subCard2_bot_txt{
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     font-style: normal;
  //     line-height: normal;
  //     letter-spacing: normal;
  //     margin-right: 200px;
  // }

  // .subCard2_txt{
  //     width: 150px;
  //     height: 20px;
  //     font-size: 18px;
  //     font-weight: 700;
  //     color: #333;
  //     word-break: break-all;
  // }

  // .subCard2_txt2{
  //     width: 93px;
  //     height: 16px;
  //     font-size: 14px;
  //     font-weight: 500;
  //     color: #999;
  //     margin-top: 4px;
  // }

  // .subCard2_btn{
  //     height: 40px;
  //     font-size: 15px;
  //     color: #36f;
  //     background-color: #fff;
  //     position: relative;
          
  //     display: inline-flex;
  //     align-items: center;
  //     justify-content: center;
  //     vertical-align: middle;
  //     min-width: 64px;
  //     padding: 0 27px;
  //     box-sizing: border-box;
  //     border-radius: 25px;
  //     font-size: 16px;
  //     font-weight: 700;
  //     line-height: normal;
  //     border: none;
  //     background-color: none;
  //     cursor: pointer;
  //     border: 1px solid #e1e2e3;
  //     padding: 12px 25.5px 11px;
  //     line-height: 1;
  // }

  // .subCard2_btn p{
  //     width: 100%;
  //     font-size: inherit;
  //     font-weight: inherit;
  //     display: inherit;
  //     align-items: inherit;
  //     justify-content: inherit;
  //     color: inherit;
  // }