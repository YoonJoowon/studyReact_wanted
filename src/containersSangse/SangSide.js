import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SangSide() {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", function () {
    const scrollingContainer = document.querySelector(".aside1");
    const threshold = 6050; 

    if (scrollingContainer && window.scrollY > threshold) {
      scrollingContainer.classList.add("fixed");
    } else if (scrollingContainer) {
      scrollingContainer.classList.remove("fixed");
    }
  });

  return (
    <SangSideStyle>
      <div className={isFixed ? "aside1.fixed" : ""}>
        <div className="aside1">
          <div className="aside1_padding">
            <div className="aside1_1">
              <h3>채용보상금</h3>
              <ul>
                <li>
                  <h4>추천인</h4>
                  <p>500,000원</p>
                </li>
                <li>
                  <h4>지원자</h4>
                  <p>500,000원</p>
                </li>
              </ul>
              <button className="" type="button">
                <span className="">
                  <svg className="" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8419 5.13156C20.8419 3.34425 19.3929 1.89474 17.6051 1.89474C15.8181 1.89474 14.3682 3.34457 14.3682 5.13156L14.3777 5.37944C14.384 5.46157 14.3934 5.54316 14.4058 5.62409L14.4152 5.67411L6.48256 9.86022L6.41109 9.78015C5.79271 9.13677 4.91641 8.75021 3.9697 8.75021C2.1352 8.75021 0.631592 10.194 0.631592 11.9933C0.631592 13.7933 2.13485 15.2364 3.9697 15.2364L4.20171 15.2286C5.04647 15.1719 5.82161 14.8075 6.3874 14.2307L6.45098 14.1587L15.0769 18.7102C15.2605 18.8071 15.4707 18.841 15.6754 18.8067L15.7022 18.8022L15.8292 18.7718C16.077 18.6942 16.2842 18.5172 16.3988 18.28L16.4722 18.148C16.5528 18.0206 16.6553 17.9073 16.7783 17.8116C17.3632 17.3544 18.2064 17.4579 18.6625 18.0422C19.1191 18.627 19.0157 19.4704 18.4326 19.9256C17.8475 20.3823 17.004 20.2788 16.5478 19.6945L16.4536 19.5905C16.1191 19.272 15.593 19.238 15.2181 19.5307C14.8057 19.8527 14.7324 20.4481 15.0543 20.8605C16.1547 22.2699 18.1889 22.5196 19.5985 21.4192C21.007 20.3199 21.2563 18.2855 20.156 16.8762C19.0556 15.4667 17.0211 15.2169 15.6126 16.3178L15.4226 16.4779C15.3616 16.5334 15.303 16.5911 15.2426 16.6547L6.6973 12.1478L6.67428 12.1292C6.60376 12.0831 6.52833 12.0476 6.45025 12.0225L6.41688 12.0139L6.49246 11.9899C6.53023 11.9752 6.56816 11.9579 6.60613 11.9379L15.9611 7.00213L16.1289 6.88917L16.159 6.86384L16.2612 6.76385C16.5102 6.48039 16.57 6.07014 16.4003 5.72293L16.3408 5.5818C16.2895 5.43808 16.263 5.28694 16.263 5.13156C16.263 4.391 16.8645 3.78948 17.6051 3.78948C18.3463 3.78948 18.9471 4.39053 18.9471 5.13156C18.9471 5.87326 18.3467 6.47363 17.6051 6.47363L17.4765 6.48228C17.0141 6.54501 16.6577 6.94138 16.6577 7.421C16.6577 7.94422 17.0818 8.36837 17.6051 8.36837C19.3932 8.36837 20.8419 6.91969 20.8419 5.13156ZM2.52634 11.9933C2.52634 11.2581 3.16483 10.6449 3.9697 10.6449L4.14547 10.6549C4.60709 10.7073 5.00699 10.9637 5.22962 11.334L5.26108 11.395L5.28192 11.4515C5.38641 11.702 5.59409 11.9092 5.85157 12.0023L5.89393 12.0152L5.85009 12.0269C5.61829 12.1049 5.41331 12.2729 5.296 12.5268L5.22001 12.668C4.96724 13.0762 4.49734 13.3416 3.9697 13.3416C3.16435 13.3416 2.52634 12.7292 2.52634 11.9933Z"
                      fill="#3366ff"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="aside1_bookmark_btn">
              <button className="" type="button">
                북마크하기
              </button>
            </div>
            <div>
              <button className="aside1_end_btn" disabled="" type="button">
                지원마감
              </button>
            </div>

            <div className="aside1_bottom">
              <button
                className="aside1_bottom_btn1"
                type="button"
              >
                <div>
                  <p className="">
                    <svg className="" viewBox="0 0 24 24">
                      <path
                        d="M11.9999 6.49201L13.4848 5.00461C15.5225 2.9634 18.8529 2.9634 20.8905 5.00445C22.9308 7.04707 22.9308 10.3876 20.8928 12.4291L13.4587 19.9397L13.4565 19.9419C13.067 20.332 12.5427 20.5339 11.9999 20.5261C11.4563 20.5339 10.9319 20.3321 10.5402 19.9397L3.10804 12.4311C1.06908 10.3875 1.06908 7.04719 3.10835 5.00445C5.14712 2.96345 8.47614 2.96345 10.5151 5.00461L11.9999 6.49201Z"
                        fill="#e1e2e3"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div>10</div>
              </button>

              <button
                type="button"
                className="aside1_bottom_btn2"
              >
                <ul>
                  <li
                    className="aside1_bottom_btn2_1"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c'), url('https://static.wanted.co.kr/images/userweb/profile_default.png')",
                    }}
                  ></li>
                  <li
                    className="aside1_bottom_btn2_2"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c')",
                    }}
                  ></li>
                  <li
                    className="aside1_bottom_btn2_3"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c'), url('https://static.wanted.co.kr/images/userweb/profile_default.png')",
                    }}
                  ></li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SangSideStyle>
  );
}

export default SangSide;

const SangSideStyle = styled.div`
  /* aside */
  .aside1 {
    width: 340px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    height: 330px;
    border-radius: 3px;
    position: fixed;

    right: calc((100% - 1060px) / 2);
    top: 70px;
  }

  .aside1.fixed {
    position: absolute;
    margin-top: 6000px;
  }

  .aside1_padding {
    padding: 24px 20px;
  }

  .aside1_1 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }

  .aside1_1 ul {
    overflow: hidden;
    margin: 24px 0;
  }

  .aside1_1 li {
    float: left;
    width: 50%;
    letter-spacing: normal;
    text-align: left;
  }

  .aside1_1 li h4 {
    font-size: 14px;
    font-weight: 600;
    color: #999;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .aside1_1 li p {
    font-size: 15px;
    color: #333;
    font-weight: 600;
  }

  .aside1_1 button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #e1e2e3;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 22px;
  }

  .aside1_1 button span {
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
  }

  .aside1_1 button span svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
  }

  .aside1_bookmark_btn {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #36f;
    text-align: center;
  }

  .aside1_end_btn {
    color: rgba(255, 255, 255, 0.5);
    background: #999;
    cursor: not-allowed;

    width: 100%;
    height: 50px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: center;
    margin-top: 10px;
  }

  .aside1_bottom {
    margin: 24px 0 0;
    height: 30px;
    display: flex;
  }

  .aside1_bottom_btn1 {
    height: 30px;
    width: 75px;
    border-radius: 15px;
    border: 1px solid #e1e2e3;
    margin-right: 12px;
    padding: 0 15px;
    justify-content: center;
    align-items: center;

    display: flex;
  }

  .aside1_bottom_btn1 svg {
    width: 22px;
    height: 18px;
  }

  .aside1_bottom_btn2 {
    margin-left: 5px;
  }

  .aside1_bottom_btn2 li {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #fff;
    float: left;
    position: relative;
    margin-left: -10px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .aside1_bottom_btn2_1 {
    z-index: 2;
  }

  .aside1_bottom_btn2_2 {
    z-index: 1;
  }

  .aside1_bottom_btn2_3 {
    z-index: 0;
  }
`;
