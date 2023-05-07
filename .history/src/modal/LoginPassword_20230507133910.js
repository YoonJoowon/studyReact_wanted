import React from "react";
import styled from "styled-components";

function LoginPassword() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper_box">

          <div className="login_top">
            <div className="">
              <button type="button" className="css-1j6p3kf">
                <span className="css-1ihsymv">
                  <svg viewBox="0 0 18 18" className="css-ckhhlt">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="css-kw2xxr">
              <p
                data-testid="Typography"
                color="var(--theme-palette-colors-black-100)"
                className="css-1mg08ww"
              >
                이메일로 로그인
              </p>
            </div>
            
            <div className="css-1jxi7lq"></div>
          </div>

          <div className="css-yc37i7">
            <form>
              <div className="css-11ayfj7">
                <label
                  data-testid="Typography"
                  color="var(--theme-palette-colors-gray-600)"
                  for="email"
                  className="css-1isrpua"
                >
                  비밀번호
                </label>
              </div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                data-testid="Input_password"
                className="css-wq6t17"
                value=""
              />
              <button
                type="submit"
                data-testid="Button"
                data-attribute-id="signup__email__login"
                className="css-c61xw1"
                disabled=""
              >
                <span
                  data-testid="Typography"
                  color="var(--theme-palette-colors-black-100)"
                  className="css-m3uta"
                >
                  다음
                </span>
              </button>
              <button type="button" data-testid="Button" className="css-1k928vt">
                <span
                  data-testid="Typography"
                  color="var(--theme-palette-colors-black-100)"
                  className="css-1ll2w7l"
                >
                  비밀번호 초기화/변경
                </span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPassword;
