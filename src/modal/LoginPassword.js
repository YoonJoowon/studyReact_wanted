import Alert from "./Alert";
import React, { useState } from "react";
import styled from "styled-components";

function LoginPassword(props) {
  // 모달창 끄기
  const closeLoginPassword = () => {
    props.setLoginPasswordOpen(false);
  };

  // 로그인완료

  const [showAlert, setShowAlert] = useState(false);

  const loginSuccess = () => {
    let password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem("password1");

    if (password === storedPassword) {
      alert('로그인 되었습니다.')
      props.setLoginPasswordOpen(false);
      props.setModalOpen(false);
      props.setIsLoggedIn(true);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <LoginPasswordstyle>
      <div>
        <div className="wrapper">
          <div className="wrapper_box">
            <div className="login_top">
              <div className="login_top_arrow" onClick={closeLoginPassword}>
                &lt;
              </div>

              <div className="login_top_txt">이메일로 로그인</div>
            </div>

            <div className="login_input">
              <form>
                <div className="login_input_txt">
                  <label
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-600)"
                    className=""
                  >
                    비밀번호
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요."
                  className=""
                />
                {showAlert && <Alert />}
                <button
                  type="button"
                  className="btn_next"
                  onClick={loginSuccess}
                >
                  다음
                </button>
                <button
                  type="button"
                  data-testid="Button"
                  className="login_reset"
                >
                  <span
                    data-testid="Typography"
                    color="var(--theme-palette-colors-black-100)"
                    className=""
                  >
                    비밀번호 초기화/변경
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LoginPasswordstyle>
  );
}

export default LoginPassword;

const LoginPasswordstyle = styled.div`
  .wrapper {
    background-color: white;
    margin: auto;
    max-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    background-color: var(--theme-palette-colors-contents-bg);
    border: 1px solid var(--theme-palette-colors-bluegray-200);

    .wrapper_box {
      position: fixed;
      background-color: white;
      border-radius: 5px;
      width: 398px;
      height: 800px;
      margin: 0 auto;
      left: 0;
      right: 0;
      margin-top: 100px;
      z-index: 11;

      display: block;

      .login_top {
        height: 64px;
        display: flex;
        position: relative;
        cursor: pointer;

        .login_top_arrow {
          font-size: 30px;
          position: relative;
          top: 15px;
          left: 15px;
        }

        .login_top_txt {
          margin: auto;
          font-weight: 700px;
        }
      }

      .login_input form {
        overflow: auto;
        position: relative;
        padding: 20px;

        input {
          width: 330px;
          height: 50px;
          min-height: 50px;
          padding: 0px 12px;
          background-color: transparent;
          border: 1px solid #c5c5c5;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 8px;
          margin-top: 8px;
        }

        .btn_next {
          color: #c5c5c5;
          background-color: #f3f3f3;
          border: none;
          width: 100%;
          height: 50px;
          min-height: 50px;
          border-radius: 25px;
          border: none;
          font-size: 16px;
          margin-bottom: 10px;
          cursor: pointer;
          border: none;
          margin-top: 30px;

          :hover {
            background-color: blue;
            color: white;
          }
        }

        .login_reset {
          width: 100%;
          height: 50px;
          min-height: 50px;
          border-radius: 25px;
          font-size: 16px;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: var(--theme-palette-colors-contents-bg);
          border: none;
          margin-top: 10px;

          span {
            color: blue;
          }
        }
      }
    }
  }
`;
