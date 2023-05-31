import React, { useState } from "react";
import styled from "styled-components";

function NavMenu() {
  const NavMenuStyle = styled.div`
    display: flex;
    margin-top: 20px;
    border-left: 1px solid #f7f9fa;
    border-right: 1px solid #f7f9fa;
    height: calc(100vh);
    width: 220px;
    background-color: #fff;
    overflow-y: auto;

    ul {
      margin-top: 10px;

      p {
        width: 190px;
        padding: 10px 15px 10px 15px;

        em {
          font-weight: 500;
          font-size: 12px;
        }

        .free {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          background: #f5f7ff
            url(https://image.wanted.co.kr/gigs/www/wanted/gigs_banner_background_img.png)
            no-repeat 100%;
          background-size: 160px 50px;

          span {
            color: blue;
            padding-left: 10px;
            font-weight: 600;
          }
        }
      }
    }
  `;

  return (
    <NavMenuStyle>
      <ul>
        <p>개발</p>
        <p>경영·비즈니스</p>
        <p>마케팅·광고</p>
        <p>디자인</p>
        <p>영업</p>
        <p>고객서비스·리테일</p>
        <p>게임 제작</p>
        <p>미디어</p>
        <p>HR</p>
        <p>엔지니어링·설계</p>
        <p>금융</p>
        <p>제조·생산</p>
        <p>물류·무역</p>
        <p>의료·제약·바이오</p>
        <p>교육</p>
        <p>법률·법집행기관</p>
        <p>건설·시설</p>
        <p>식·음료</p>
        <p>공공·복지</p>
        <p className="free">
          <div className="free">
            <p>프리랜서</p>
          </div>
        </p>
      </ul>
    </NavMenuStyle>
  );
}

export default NavMenu;
