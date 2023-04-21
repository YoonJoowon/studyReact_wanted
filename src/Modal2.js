import React, { useState } from 'react';
import './App.css';
import Checkbox from './Checkbox';

function Modal2(porps2) {

    // 모달창 끄기
    const closeModal2 = () => {
        porps2.setModal2Open(false);
    };

    const [allChecked, setAllChecked] = useState(false);
    const [checkedList, setCheckedList] = useState([false, false, false, false, false]);

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

    return (
        <div id="modal2">
            <div id="login_modal2" className="modal_all2">
                <div className="modal-content2">
                    {/* <!-- close --> */}
                    <button onClick={closeModal2} id="modal_top_close2" className="modal_top_close2" type="button">
                        <svg viewBox="0 0 24 24" className=""><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg>
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
                        <input className="modal2_number_input" type="text" placeholder="(예시) 01012345678" />

                        <button className="modal2_number_pass">인증번호 받기</button>
                        <input className="modal2_number_input2" type="text" placeholder="인증번호를 입력해 주세요." />
                    </article>

                    <article className="modal2_password">
                        <div className="modal2_password_txt">비밀번호</div>
                        <input className="" type="text" placeholder="비밀번호를 입력해 주세요" />

                        <div className="modal2_password_txt2">
                            <p>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여</p>
                            <p>8자 이상 입력해주세요.</p>

                        </div>
                    </article>
                    <div className='modal2_checkbox'>
                        <Checkbox
                            label="전체 동의"
                            checked={allChecked}
                            onChange={handleAllChecked}
                        />

                        <hr/>
                        
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
                    <button className="modal2_btn2" type="button"><p>가입하기</p></button>
                </div>
            </div>
        </div >

    )
}

export default Modal2;