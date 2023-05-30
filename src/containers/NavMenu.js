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

          span{
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
        <p>
          <em>개발</em>
        </p>
        <p>
          <em>경영·비즈니스</em>
        </p>
        <p>
          <em>마케팅·광고</em>
        </p>
        <p>
          <em>디자인</em>
        </p>
        <p>
          <em>영업</em>
        </p>
        <p>
          <em>고객서비스·리테일</em>
        </p>
        <p>
          <em>게임 제작</em>
        </p>
        <p>
          <em>미디어</em>
        </p>
        <p>
          <em>HR</em>
        </p>
        <p>
          <em>엔지니어링·설계</em>
        </p>
        <p>
          <em>금융</em>
        </p>
        <p>
          <em>제조·생산</em>
        </p>
        <p>
          <em>물류·무역</em>
        </p>
        <p>
          <em>의료·제약·바이오</em>
        </p>
        <p>
          <em>교육</em>
        </p>
        <p>
          <em>법률·법집행기관</em>
        </p>
        <p>
          <em>건설·시설</em>
        </p>
        <p>
          <em>식·음료</em>
        </p>
        <p>
          <em>공공·복지</em>
        </p>
        <p class="">
          <div class="free">
            <span>프리랜서</span>
          </div>
        </p>
      </ul>
    </NavMenuStyle>
  );
}

export default NavMenu;
