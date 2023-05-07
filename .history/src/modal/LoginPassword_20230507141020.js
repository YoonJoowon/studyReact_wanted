import React from "react";
import styled from "styled-components";

function LoginPassword() {
  return (
    <LoginPasswordstyle>
      <div>
        <div className="wrapper">
          <div className="wrapper_box">
            <div className="login_top">
              <div className="login_top_arrow">&lt;</div>

              <div className="login_top_txt">이메일로 로그인</div>
            </div>

            <div className="login_input">
              <form>
                <div className="login_input_txt">
                  <label
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-600)"
                    for="email"
                    className=""
                  >
                    비밀번호
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  name="password"
                  data-testid="Input_password"
                  className=""
                  value=""
                />
                <button
                  type="submit"
                  data-testid="Button"
                  data-attribute-id="signup__email__login"
                  className=""
                  disabled=""
                >
                  <span
                    data-testid="Typography"
                    color="var(--theme-palette-colors-black-100)"
                    className=""
                  >
                    다음
                  </span>
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
  /* display: none; */

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

      .login_input {
        overflow: auto;
        position: relative;
        padding: 20px;
        width: 357px;
        height: 245px;

        input {
          width: 100%;
          height: 50px;
          min-height: 50px;
          padding: 0px 12px;
          outline: none;
          background-color: transparent;
          border: 1px solid;
          color: var(--theme-palette-colors-gray-900);
          border-radius: 5px;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 8px;
        }
      }
    }
  }
`;
