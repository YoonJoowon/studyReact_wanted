import React, { useState } from "react";
import Modal2 from "./Modal2";
import styled from "styled-components";
import { useRef } from "react";

function Modal(props) {
  const [modal2Open, setModal2Open] = useState(false);

  // 모달창2 노출
  const showModal2 = () => {
    setModal2Open(true);
    // props.setModalOpen(false);
  };

  // 모달창 끄기
  const closeModal = () => {
    props.setModalOpen(false);
  };


  const email = useRef();
  const handleSubmit = () => {
    if (email.current.value === "ysw6963@gmail.com") {
      localStorage.setItem("emailData", "ysw6963@gmail.com");
    }
  };

  // window.localStorage.setItem("id1", "ysw6963@gmail.com");
  // window.localStorage.getItem("id1");

  // localStorage에 저장할 객체
  const obj = {
    id1: "ysw6963@gmail.com",
    password1: 1234,
  };

  // 객체, 배열을 JSON 문자열로 변환
  const objString = JSON.stringify(obj);

  // setItem
  window.localStorage.setItem("email", objString);

  // getItem
  const emailString = window.localStorage.getItem("email");

  // JSON 문자열을 객체, 배열로 변환
  const personObj = JSON.parse(emailString);

  // 결과 출력
  document.write(personObj); // {"name":"anna","age":20}
  document.write("<br/>");


  return (
    <ModalStyle>
      <div>
        <div id="modal">
          <div id="login_modal" className="modal_all">
            <div className="modal-content">
              <button
                onClick={closeModal}
                id="modal_top_close"
                className="modal_top_close"
                type="button"
              >
                <svg viewBox="0 0 24 24" className="css-ckhhlt">
                  <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
                </svg>
              </button>

              <article className="modal_top">
                <div className="modal_top_wanted">
                  <svg viewBox="0 0 93 28" className="css-1kn8y82">
                    <path
                      d="M4.77051 23H8.68066L11.626 13.7578L14.5967 23H18.5068L22.874 9.28906H18.9639L16.4248 18.0996L13.4541 9.28906H9.79785L6.82715 18.0996L4.28809 9.28906H0.37793L4.77051 23ZM22.8486 16.1191C22.8486 19.6865 25.1084 23.3301 29.5264 23.3301C31.0371 23.3428 32.332 22.9111 33.3857 22.1621V23H36.9658V9.28906H33.3857V10.127C32.332 9.37793 31.0371 8.94629 29.5264 8.95898C25.1084 8.95898 22.8486 12.5518 22.8486 16.1191ZM26.3271 16.1191C26.3145 13.6689 27.9902 12.2725 29.9326 12.2598C31.8496 12.2725 33.3604 13.6309 33.3604 16.0938C33.3604 18.5693 31.8496 20.0166 29.9326 20.0039C27.9268 20.0166 26.3145 18.5693 26.3271 16.1191ZM39.1494 23H42.8564V15.1035C42.8564 13.5166 43.7832 12.2725 45.4209 12.2598C47.1855 12.2725 47.9346 13.4658 47.9346 15.002V23H51.6416V14.3418C51.6416 11.3457 50.0928 8.9209 46.6904 8.9082C45.2432 8.9209 43.6309 9.54297 42.7803 10.8887V9.28906H39.1494V23ZM52.708 12.5645H55.1963V18.9375C55.1963 21.6035 56.8594 23.3301 59.5381 23.3301C60.6172 23.3301 61.29 23.1396 61.6201 23V19.7754C61.4297 19.8516 60.9219 19.9023 60.4775 19.9023C59.4238 19.9023 58.8779 19.5088 58.8779 18.3027V12.5645H61.6201V9.28906H58.8779V4.69336L55.2471 6.2168V9.28906H52.708V12.5645ZM62.8389 16.1445C62.8389 20.0928 65.3652 23.3428 69.5166 23.3301C72.5381 23.3428 74.7217 21.6035 75.6865 19.0898L72.3857 18.4043C71.8398 19.585 70.8369 20.3594 69.5166 20.3594C67.752 20.3594 66.5586 18.9756 66.2666 17.1094H76.1436C76.1816 16.792 76.1943 16.4746 76.1943 16.1445C76.1943 11.9551 73.4395 8.95898 69.5166 8.95898C65.4414 8.95898 62.8389 12.1836 62.8389 16.1445ZM66.4443 14.5449C66.9014 13.1992 67.9932 12.2598 69.5166 12.2598C71.04 12.2598 72.1445 13.1992 72.6143 14.5449H66.4443ZM77.4131 16.1191C77.4131 20.1055 79.9395 23.3428 84.0908 23.3301C85.6016 23.3428 86.8965 22.8984 87.9502 22.1621V23L91.5049 23.0254V3.27148L87.874 4.69336V10.0762C86.7568 9.32715 85.4365 8.95898 84.0908 8.95898C80.0029 8.95898 77.4131 12.1201 77.4131 16.1191ZM80.8662 16.1191C80.8662 13.6562 82.542 12.2725 84.4717 12.2598C86.4141 12.2725 87.9121 13.6309 87.9248 16.0684C87.9121 18.5693 86.4141 20.0166 84.4717 20.0039C82.4912 20.0166 80.8662 18.5693 80.8662 16.1191Z"
                      fill="var(--theme-palette-colors-black-100)"
                    ></path>
                  </svg>
                </div>
                <div className="modal_top_txt1">
                  <p>하나의 계정으로</p>
                  <p>더욱 편리하게</p>
                </div>
                <div className="modal_top_txt2">
                  <p>원티드가 제공하는 서비스를</p>
                  <p>하나의 계정으로 모두 이용할 수 있습니다.</p>
                </div>
              </article>
              <article className="modal_email">
                <div className="modal_email_txt">이메일</div>

                <div>
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      id="email"
                      placeholder="이메일을 입력하세요."
                      onkeyUp="checkEmailValidity()"
                      ref={email}
                    />
                    <p data-testid="Typography" color="" id="email_message"></p>
                    {/* <!-- modal2 open --> */}
                    <button
                      onClick={showModal2}
                      id="modal2_open"
                      className="modal2_open"
                      type="button"
                    >
                      이메일로 계속하기
                    </button>
                  </form>
                </div>

                <div className="modal_email_txt2">
                  <p>또는</p>
                </div>
              </article>
              <article className="modal_sns">
                <div className="modal_sns_icon">
                  <span>
                    <svg viewBox="0 0 57 56" className="css-1h47l4s">
                      <path
                        d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                        fill="black"
                      ></path>
                      <path
                        d="M28.8182 19.359C30.0068 19.359 31.4968 18.5307 32.384 17.4264C33.1876 16.4256 33.7736 15.0279 33.7736 13.6302C33.7736 13.4404 33.7568 13.2506 33.7233 13.0953C32.4008 13.147 30.8104 14.0098 29.8561 15.1659C29.1028 16.046 28.4164 17.4264 28.4164 18.8413C28.4164 19.0484 28.4499 19.2555 28.4666 19.3245C28.5503 19.3418 28.6843 19.359 28.8182 19.359ZM24.6329 40.2381C26.2568 40.2381 26.9767 39.1165 29.0023 39.1165C31.0615 39.1165 31.5135 40.2036 33.3215 40.2036C35.0961 40.2036 36.2847 38.5126 37.4064 36.8561C38.6619 34.958 39.1809 33.0944 39.2144 33.0081C39.0972 32.9736 35.6988 31.5414 35.6988 27.5209C35.6988 24.0352 38.3773 22.465 38.528 22.3442C36.7535 19.7214 34.0581 19.6524 33.3215 19.6524C31.3294 19.6524 29.7055 20.8947 28.6843 20.8947C27.5794 20.8947 26.1229 19.7214 24.3986 19.7214C21.1173 19.7214 17.7858 22.5168 17.7858 27.7969C17.7858 31.0755 19.0247 34.5438 20.5481 36.787C21.8539 38.6851 22.9923 40.2381 24.6329 40.2381Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div>Apple</div>
                </div>
                <div className="modal_sns_icon">
                  <span>
                    <svg viewBox="0 0 57 56" className="css-1h47l4s">
                      <path
                        d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                        fill="#1877F2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5 14.2855C20.9256 14.2855 14.7857 20.4253 14.7857 27.9997C14.7857 34.8445 19.801 40.5181 26.3578 41.5467V31.9645H22.8744V27.9997H26.3578V24.9785C26.3578 21.5417 28.404 19.6423 31.5377 19.6423C33.038 19.6423 34.607 19.9111 34.607 19.9111V23.2848H32.8776C31.1743 23.2848 30.6422 24.3421 30.6422 25.4269V27.9997H34.4465L33.839 31.9645H30.6422V41.5467C37.199 40.5181 42.2143 34.8445 42.2143 27.9997C42.2143 20.4253 36.0744 14.2855 28.5 14.2855Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  Facebook
                </div>
                <div className="modal_sns_icon">
                  <span>
                    <svg viewBox="0 0 57 56" className="css-1h47l4s">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.6657 28.3122C41.6657 27.34 41.5789 26.4044 41.4158 25.5068H28.5V30.8112H35.8813C35.5629 32.5255 34.5968 33.9792 33.1446 34.9514V38.3922H37.5758C40.1693 36.0044 41.6657 32.4889 41.6657 28.3122Z"
                        fill="#3D82F0"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5003 41.7146C32.2032 41.7146 35.3072 40.4864 37.5761 38.3927L33.1449 34.9504C31.9167 35.7733 30.3457 36.2594 28.5003 36.2594C24.9285 36.2594 21.9053 33.8472 20.8264 30.606H16.2443V34.1595C18.5011 38.6411 23.1396 41.7146 28.5003 41.7146Z"
                        fill="#31A752"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8261 30.606C20.5518 29.7831 20.3964 28.9039 20.3964 28.0002C20.3964 27.0966 20.5518 26.2174 20.8261 25.3945V21.841H16.244C15.316 23.6924 14.7857 25.7877 14.7857 28.0002C14.7857 30.2128 15.316 32.3081 16.244 34.1595L20.8261 30.606Z"
                        fill="#F9BA00"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5003 19.7407C30.5133 19.7407 32.322 20.4325 33.7422 21.7917L37.6767 17.8588C35.3011 15.6447 32.1971 14.2855 28.5003 14.2855C23.1396 14.2855 18.5011 17.359 16.2443 21.842L20.8264 25.394C21.9053 22.1529 24.9285 19.7407 28.5003 19.7407Z"
                        fill="#E64234"
                      ></path>
                    </svg>
                  </span>
                  Google
                </div>
                <div className="modal_sns_icon">
                  <span>
                    <svg viewBox="0 0 57 56" className="css-1h47l4s">
                      <path
                        d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                        fill="#FEE500"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z"
                        fill="#181600"
                      ></path>
                    </svg>
                  </span>
                  Kakao
                </div>
              </article>

              <div className="modal_sns_forgot">
                계정을잊으셨나요?
                <span className="modal_sns_forgot_arrow">
                  <svg
                    viewBox="0 0 12 12"
                    color="var(--theme-palette-colors-gray-600)"
                    className="css-2zw3f5"
                  >
                    <path
                      d="M3.34467 9.71967C3.05178 10.0126 3.05178 10.4874 3.34467 10.7803C3.63756 11.0732 4.11244 11.0732 4.40533 10.7803L8.65533 6.53033C8.94822 6.23744 8.94822 5.76256 8.65533 5.46967L4.40533 1.21967C4.11244 0.926777 3.63756 0.926777 3.34467 1.21967C3.05178 1.51256 3.05178 1.98744 3.34467 2.28033L7.06434 6L3.34467 9.71967Z"
                      fill="var(--theme-palette-colors-gray-600)"
                    ></path>
                  </svg>
                </span>
              </div>

              <hr className="modal_sns_line" />

              <article className="modal_bot">
                <div className="modal_bot_txt1">
                  <p>
                    이용약관<span>개인정보처리방침</span>
                  </p>
                </div>

                <div>
                  <p
                    className="modal_bot_txt2"
                    data-testid="Typography"
                    color="var(--theme-palette-colors-gray-600)"
                  >
                    © Wantedlab, Inc.
                  </p>
                </div>
              </article>
            </div>
            <div className="modal_back"></div>
          </div>
          {modal2Open && <Modal2 setModal2Open={setModal2Open} {...props} />}
        </div>
      </div>
    </ModalStyle>
  );
}

export default Modal;

const ModalStyle = styled.div`
  /* modal */
  .modal_all {
    background-color: white;
    border-radius: 5px;
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: var(--theme-palette-colors-contents-bg);
    border: 1px solid var(--theme-palette-colors-bluegray-200);

    /* display: none; */
  }

  .modal-content {
    overflow: auto;
    position: fixed;
    background-color: white;
    width: 398px;
    height: 800px;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 100px;
    z-index: 11;

    display: block;
  }

  .modal_top_close {
    float: right;
    cursor: pointer;
    padding: 5px;
  }

  .modal_top_close svg {
    width: 22px;
    height: 22px;
    float: right;
  }

  .modal_top_wanted {
    margin-left: 150px;
    display: block;
  }

  .modal_top svg {
    padding-top: 56px;

    width: 93px;
    height: 28px;
  }

  .modal_top_txt1 {
    color: black;
    font-weight: bold;
    text-align: center;
    font-size: 26px;
    margin-bottom: 22px;
    margin-top: 40px;
  }

  .modal_top_txt1 p {
    margin-bottom: 6px;
  }

  .modal_top_txt2 {
    color: gray;
    font-weight: 400;
    text-align: center;
    font-size: 13px;
    margin-bottom: 45px;
  }

  .modal_top_txt2 p {
    margin-bottom: 6px;
  }

  .modal_email {
    width: 360px;
    height: 70px;
    margin: auto;
    margin-bottom: 130px;
  }

  .modal_email_txt {
    color: rgb(66, 66, 66);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .modal_email input {
    padding: 0px 12px;
    width: 332px;
    height: 48px;

    outline: none;
    background-color: transparent;
    border: 1px solid rgb(233, 230, 230);
    color: rgb(163, 163, 163);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin: auto;
    margin-bottom: 8px;
  }

  .modal_email input:focus {
    border: 1px solid blue;
  }

  .input[type="text"]:invalid {
    width: 332px;
    height: 48px;
    padding: 0px 12px;
    outline: none;
    background-color: transparent;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    border: 1px solid red !important;
  }

  .input[type="text"]:invalid {
    color: red;
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 0px;
  }

  .modal_email button {
    color: rgb(151, 151, 151);
    background-color: rgb(241, 241, 241);
    border: none;
    cursor: default;

    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
    margin-top: 30px;
  }

  .modal_email .modal2_open:hover {
    background-color: rgb(63, 63, 255);
    color: white;
    cursor: pointer;
  }

  .modal_email_txt2 p {
    text-align: center;
    font-size: 12px;
    color: gray;
  }

  .modal_sns {
    display: flex;
    width: 328px;
    height: 78px;
    margin: auto;
  }

  .modal_sns_icon svg {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal_sns_icon {
    margin: auto;
    text-align: center;
    color: gray;
    font-size: 13px;
    margin-top: 8px;
  }

  .modal_sns_forgot {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14px;
  }

  .modal_sns_line {
    margin-top: 30px;
    color: gray;
    opacity: 0.2;
  }

  .modal_bot .modal_bot_txt1 p {
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
  }

  .modal_bot .modal_bot_txt1 span {
    font-weight: 900;
    margin-left: 12px;
  }

  .modal_bot_txt2 {
    color: gray;
    font-weight: 400;
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .modal_bot_select {
    width: 140px;
    height: 44px;
  }

  .modal_sns_forgot_arrow {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: inherit;
    margin-left: 3px;
    width: 12px;
    height: 12px;
  }

  .modal_bot {
    width: 358px;
    margin: auto;
  }

  .modal_bot_arrow {
    position: absolute;
    right: 20px;
    font-size: 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .modal_bot_img {
    width: 26px;
    height: 16px;
  }

  .modal_bot_arrow .path {
    width: 10px;
    height: 10px;
  }

  .modal_back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;
