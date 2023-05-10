import React, { useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

function Modal2(porps2) {
  // 모달창 끄기
  const closeModal2 = () => {
    porps2.setModal2Open(false);
    porps2.setModalOpen(false);
  };

  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  // 전체를 체크
  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setCheckedList([isChecked, isChecked, isChecked, isChecked, isChecked]);
  };

  // 각각 체크
  const handleCheck = (index) => (event) => {
    const isChecked = event.target.checked;
    setCheckedList((prev) => {
      const newList = [...prev];
      newList[index] = isChecked;
      return newList;
    });
  };

  const isButtonBlue = checkedList[0] && checkedList[1] && checkedList[2];

  // 인증번호
  const [verificationCode, setVerificationCode] = useState(""); // 인증번호
  const [verificationMessage, setVerificationMessage] = useState(""); //인증메세지

  // 인증번호 발송 버튼 클릭 시 상태값 변경
  const handleVerificationCodeSend = () => {
    setVerificationCode("123456");
    setVerificationMessage("인증 해주세요");
  };

  const [inputValue, setInputValue] = useState("");

  // 인증번호 입력 값
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 폼 제출 시 상태값 확인 후 처리
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue || verificationCode !== inputValue) {
      console.log("인증 실패");
      return;
    }
    console.log("인증 성공");
    NewLogin();
    
  };

  const NewLogin = () => {
    let password = document.getElementById("password").value;
    localStorage.setItem("newPassword", password);

    porps2.setIsLoggedIn(true);
    porps2.setModal2Open(false);
    porps2.setModalOpen(false);
  };
  
  return (
    <Modal2Style>
      <div id="modal2">
        <div id="login_modal2" className="modal_all2">
          <div className="modal-content2">
            {/* <!-- close --> */}
            <button
              onClick={closeModal2}
              id="modal_top_close2"
              className="modal_top_close2"
              type="button"
            >
              <svg viewBox="0 0 24 24" className="">
                <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
              </svg>
            </button>
            <div className="modal2_top_txt">회원가입</div>

            <article className="modal2_name">
              <div className="modal2_name_txt">이름</div>
              <input type="text" placeholder="이름을 입력해주세요" />
            </article>

            <article className="modal2_number">
              <div className="modal2_number_txt">휴대폰 번호</div>
              <div className="">
                <select className="modal2_number_select" name="" id="">
                  <option value="">대한민국 +82</option>
                </select>
              </div>
              <input
                className="modal2_number_input"
                type="text"
                placeholder="(예시) 01012345678"
              />

              <button
                onClick={handleVerificationCodeSend}
                className="modal2_number_pass"
              >
                인증번호 받기
              </button>

              <input
                className="modal2_number_input2"
                type="text"
                placeholder="인증번호를 입력해 주세요."
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="verificationCount">
                {verificationMessage}
                {/* {timeString} */}
              </div>
            </article>

            <article className="modal2_password">
              <div className="modal2_password_txt">비밀번호</div>
              <input
                className="newLoginPassword"
                type="password"
                id="password"
                placeholder="비밀번호를 입력해 주세요"
              />

              <div className="modal2_password_txt2">
                <p>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여</p>
                <p>8자 이상 입력해주세요.</p>
              </div>
            </article>

            <div className="modal2_checkbox">
              <Checkbox
                label="전체 동의"
                checked={allChecked}
                onChange={handleAllChecked}
              />

              <hr />

              <Checkbox
                label="만 14세 이상입니다. (필수)"
                checked={checkedList[0]}
                onChange={handleCheck(0)}
              />
              <Checkbox
                label="원티드 이용약관 동의 (필수)"
                checked={checkedList[1]}
                onChange={handleCheck(1)}
              />
              <Checkbox
                label="원티드 개인정보 수집 및 이용 동의 (필수)"
                checked={checkedList[2]}
                onChange={handleCheck(2)}
              />
              <Checkbox
                label="채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기"
                checked={checkedList[3]}
                onChange={handleCheck(3)}
              />
            </div>
            <button
              className={`modal2_btn2 ${isButtonBlue ? "blue" : ""}`}
              type="button"
              onClick={handleSubmit}
            >
              <p>가입하기</p>
            </button>
          </div>
        </div>
      </div>
    </Modal2Style>
  );
}

export default Modal2;

const Modal2Style = styled.div`
  /* modal2 */
  .modal_all2 {
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

  .modal-content2 {
    overflow: auto;
    position: fixed;
    background-color: white;
    width: 398px;
    height: 900px;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 100px;
    z-index: 12;
    overflow-y: hidden;
  }

  .modal-content2 input:focus {
    border: 1px solid blue;
  }

  .modal_top_close2 {
    cursor: pointer;
    padding: 5px;
    position: absolute;
    right: 0;
  }

  .modal_top_close2 svg {
    width: 22px;
    height: 22px;
    float: right;
  }

  .modal2_top_txt {
    font-size: 18px;
    font-weight: 550;
    text-align: center;
    color: rgb(77, 77, 77);
    margin-top: 25px;
  }

  .modal2_name {
    width: 360px;
    height: 70px;
    margin: auto;
    margin-top: 70px;
  }

  .modal2_name_txt {
    color: rgb(66, 66, 66);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .modal2_number_select {
    padding: 0px 12px;
    width: 355px;
    height: 48px;

    outline: none;
    background-color: transparent;
    border: 1px solid rgb(233, 230, 230);
    color: rgb(58, 58, 58);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin: auto;
    margin-bottom: 8px;
  }

  .modal2_name input {
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
  }

  .modal2_number {
    width: 360px;
    margin: auto;
    margin-top: 30px;

    .verificationCount {
      color: blue;
      margin-bottom: 15px;
      font-size: 13px;
    }
  }

  .modal2_number_txt {
    color: rgb(66, 66, 66);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .modal2_number_input {
    padding: 0px 12px;
    width: 200px;
    height: 48px;

    outline: none;
    background-color: transparent;
    border: 1px solid rgb(233, 230, 230);
    color: rgb(163, 163, 163);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .modal2_number_txt p {
    text-align: center;
    font-size: 12px;
    color: gray;
  }

  .modal2_number_pass {
    background-color: rgba(243, 243, 243, 0.671);
    border: 1px solid rgb(233, 230, 230);
    color: rgb(163, 163, 163);
    border-radius: 5px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;

    height: 52px;

    :hover {
      background-color: white;
      color: blue;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .modal2_number_input2 {
    padding: 0px 12px;
    width: 330px;
    height: 48px;

    outline: none;
    background-color: rgba(243, 243, 243, 0.671);
    border: 1px solid rgb(233, 230, 230);
    color: rgb(163, 163, 163);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .modal2_password {
    width: 360px;
    height: 70px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 70px;
  }

  .modal2_password_txt {
    color: rgb(66, 66, 66);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .modal2_password input {
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
  }

  .modal2_password_txt2 p {
    color: rgb(66, 66, 66);
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .modal2_checkbox {
    width: 360px;
    margin: auto;
  }

  .modal2_checkbox hr {
    opacity: 0.3;
  }

  .modal2_btn2 {
    background-color: rgb(245, 245, 245);
    width: 350px;
    border-radius: 30px;
    padding: 10px;
    margin-top: 50px;
    margin-left: 19px;
  }

  .modal2_btn2 p {
    color: rgb(138, 138, 138);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .blue {
    background-color: blue;
    cursor: pointer;

    p {
      color: white;
    }
  }
`;
