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
        <em>개발</em>

        <em>경영·비즈니스</em>

        <em>마케팅·광고</em>

        <em>디자인</em>

        <em>영업</em>

        <em>고객서비스·리테일</em>

        <em>게임 제작</em>

        <em>미디어</em>

        <em>HR</em>

        <em>엔지니어링·설계</em>

        <em>금융</em>

        <em>제조·생산</em>

        <em>물류·무역</em>

        <em>의료·제약·바이오</em>

        <em>교육</em>

        <em>법률·법집행기관</em>

        <em>건설·시설</em>

        <em>식·음료</em>

        <em>공공·복지</em>

        <p className="">
          <div className="free">
            <span>프리랜서</span>
          </div>
        </p>
      </ul>
    </NavMenuStyle>
  );
}

export default NavMenu;
