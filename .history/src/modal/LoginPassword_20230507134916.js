import React from "react";
import styled from "styled-components";

function LoginPassword() {
  return (
    <LoginPasswordstyle>
      <div>
        <div className="wrapper">
          <div className="wrapper_box">
            <div className="login_top">
              <div className="login_top_arrow">
                <button type="button" className="">
                  <span className="">
                    <svg viewBox="0 0 18 18" className="">
                      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                    </svg>
                  </span>
                </button>
              </div>

              <div className="login_top_txt">
                <p
                  data-testid="Typography"
                  color="var(--theme-palette-colors-black-100)"
                  className=""
                >
                  이메일로 로그인
                </p>
              </div>
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
  width: 400px;
  height: 367px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .wrapper{
    border-radius: 5px;
    width: 100%;
    /* max-height: calc(100vh - 100px); */
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-palette-colors-contents-bg);
    border: 1px solid var(--theme-palette-colors-bluegray-200);
  }











`;
