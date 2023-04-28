import React, { useState } from "react";
import BtnRound from "./BtnRound";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <NavStyle>
      <div className="nav">
        <nav>
          <div className="nav_cen">
            <div className="nav_cen_logo">
              <div className="nav_cen_img"></div>
              <Link to={"/"}>
                <p>
                  <svg width="74" height="21" viewBox="0 0 140 32">
                    <path
                      fill="currentColor"
                      d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
            <ul>
              <Link to={"/ChaeYong"}>
                <li>채용</li>
              </Link>
              <li>이벤트</li>
              <li>직군별 연봉</li>
              <li>이력서</li>
              <li>커뮤니티<p>New</p></li>
              <li>프리랜서<p>Beta</p></li>
              <li>AI합격예측</li>
            </ul>
            <div className="aside">
              <button className="asideImg" type="button"></button>
              <button onClick={showModal} id="login" type="button">
                회원가입/로그인
              </button>

              <p>
                <BtnRound>기업 서비스</BtnRound>
              </p>
            </div>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
          </div>
        </nav>
      </div>
    </NavStyle>
  );
}

export default Nav;

const NavStyle = styled.div`
  nav {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #ffffff;
    top: 0;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    z-index: 5;
    margin: auto;
    position: fixed;
    justify-content: center;
    align-items: center;
  }

  .navCen {
    width: 1060px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav .bar {
    width: 17px;
    height: 14px;
    display: flex;
    padding: 15px;
    margin-right: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .navCen p {
    padding-left: 5px;
  }

  .bar2 {
    /* flex-grow: ; */
    height: 50px;
    text-align: center;
    width: 621px;
    margin: auto;
  }

  nav ul li {
    float: left;
    position: relative;
  }

  nav li svg {
    position: absolute;
    top: 10px;
    right: -7px;
    pointer-events: none;
  }

  nav li p{
    position: absolute;
    top: 6px;
    right: -5px;
    font-size: 8px;
  }

  a {
    font-family: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }

  .aside {
    width: 271px;
    /* height: 50px; */
    display: flex;
    padding: 10px 0px;
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    float: right;
  }

  .aside .asideImg {
    width: 15px;
    height: 15px;
    padding: 10px;
    padding-bottom: 10px;
    margin-left: 20px;
  }

  #login {
    width: 300px;
    height: 20px;
    font-size: 12px;
    padding-top: 10px;
    cursor: pointer;
  }

  .aside div {
    padding-top: 10px;
    display: inline-flex;
  }

  .asidelogin {
    width: 100px;
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin-left: 15px;
    font-weight: 400;
    cursor: pointer;
  }
`;
