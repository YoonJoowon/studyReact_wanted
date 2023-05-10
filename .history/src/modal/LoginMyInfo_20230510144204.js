import React from "react";

function LoginMyInfo() {
  return (
    <div className="wrapper">     
      <ul className="MenuList">
        <li className="MenuListLi">
          <a
            href="/mywanted"
            className=""
          >
            <span>MY 원티드</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/matching"
            className=""
          >
            <span>프로필</span>
          </a>
        </li>
        <li className="">
          <a
            href="/status/applications"
            className=""
          >
            <span>지원 현황</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/status"
            className=""
          >
            <span>제안받기 현황</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/likes"
            className=""
          >
            <span>좋아요</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/bookmarks"
            className=""
          >
            <span>북마크</span>
          </a>
        </li>
        <li className="">
          <a
            href="/referral"
            className=""
          >
            <span>추천</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/point"
            className=""
          >
            <span>포인트</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="is-logout"
          >
            <span>로그아웃</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginMyInfo;
