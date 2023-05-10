import React from "react";
import styled from "styled-components";

function LoginMyInfo() {
  return (
    <LoginMyInfoStyle>
      <div className="wrapper">
        <div className="wrapperMenu">
          <ul className="MenuList">
            <li className="MenuListLi">
              <a href="/mywanted" className="">
                <span>MY 원티드</span>
              </a>
            </li>
            <li className="">
              <a href="/profile/matching" className="">
                <span>프로필</span>
              </a>
            </li>
            <li className="">
              <a href="/status/applications" className="">
                <span>지원 현황</span>
              </a>
            </li>
            <li className="">
              <a href="/profile/status" className="">
                <span>제안받기 현황</span>
              </a>
            </li>
            <li className="">
              <a href="/profile/likes" className="">
                <span>좋아요</span>
              </a>
            </li>
            <li className="">
              <a href="/profile/bookmarks" className="">
                <span>북마크</span>
              </a>
            </li>
            <li className="">
              <a href="/referral" className="">
                <span>추천</span>
              </a>
            </li>
            <li className="">
              <a href="/profile/point" className="">
                <span>포인트</span>
              </a>
            </li>
            <li>
              <button type="button" className="is-logout">
                <span>로그아웃</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </LoginMyInfoStyle>
  );
}

export default LoginMyInfo;

const LoginMyInfoStyle = styled.div`
  .wrapper {
    position: relative;
    .wrapperMenu {
      position: absolute;
      width: 190px;
      padding: 0 5px;
      font-size: 14px;
      color: #333;
      font-weight: 600;
      margin-top: 30px;

      border-radius: 10px;
      box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
      border: 1px solid #cdcdcd;
      background-color: #fff;

      .MenuList {
        display: block;
        margin: auto;
        /* padding-top: 10px; */

        li {
          margin: auto;
          width: 100%;
          padding: 0px;
          padding-top: 10px;
          padding-bottom: 10px;
          
          a {
            margin: auto;
            text-align: center;
          }
        }
      }
    }
  }
`;
