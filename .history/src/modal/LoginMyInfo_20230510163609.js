import React from "react";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";

function LoginMyInfo(props) {
  
  const navigate = useNavigate();

  const CloseLoggedInModal = () => {
    props.setIsLoggedIn();
    props.setLoginModalOpen(false);
    localStorage.removeItem("password");
  };

  return (
    <LoginMyInfoStyle>
      <div className="wrapper">
        <div className="wrapperMenu">
          <ul className="menuList">
            <li className="menuListLi">
              <span>MY 원티드</span>
            </li>
            <li className="">
              <span>프로필</span>
            </li>
            <hr />
            <li className="">
              <span>지원 현황</span>
            </li>
            <li className="">
              <span>제안받기 현황</span>
            </li>
            <li className="">
              <span>좋아요</span>
            </li>
            <li className="">
              <button
                type="button"
                onClick={() => {
                  navigate("/Bookmarkt", {});
                }}
              >
                북마크
              </button>
            </li>
            <hr />
            <li className="">
              <span>추천</span>
            </li>
            <li className="">
              <span>포인트</span>
            </li>

            <button
              type="button"
              className="isLogout"
              onClick={CloseLoggedInModal}
            >
              <span>로그아웃</span>
            </button>
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
      font-size: 14px;
      color: #333;
      font-weight: 600;
      margin-top: 30px;

      border-radius: 10px;
      box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
      border: 1px solid #cdcdcd;
      background-color: #fff;

      .menuList {
        margin: auto;
        text-align: center;
        hr {
          opacity: 0.2;
        }

        li {
          margin: auto;
          width: 100%;
          padding: 0px;
          padding-top: 10px;
          padding-bottom: 10px;
          cursor: pointer;

          :hover {
            width: 170px;
            background-color: #f5f5f5;
            border-radius: 10px;
          }

          span {
            display: block;
          }

          button {
            cursor: pointer;
          }
        }
        .isLogout {
          padding: 20px;
          margin-top: 10px;
          width: 100%;
          border-radius: 0px;
          background-color: #f5f5f5;
          cursor: pointer;
        }
      }
    }
  }
`;
