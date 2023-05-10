import React from "react";

function LoginMyInfo() {
  return (
    <div className="wrapper">     
      <ul className="MenuList">
        <li className="MenuListLi">
          <a
            href="/mywanted"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="myWanted"
            data-badge="true"
          >
            <span>MY 원티드</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/matching"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="profile"
          >
            <span>프로필</span>
          </a>
        </li>
        <li className="">
          <a
            href="/status/applications"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="applications"
          >
            <span>지원 현황</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/status"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="offersReceived"
          >
            <span>제안받기 현황</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/likes"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="likes"
          >
            <span>좋아요</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/bookmarks"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="bookmarks"
          >
            <span>북마크</span>
          </a>
        </li>
        <li className="">
          <a
            href="/referral"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="refer"
          >
            <span>추천</span>
          </a>
        </li>
        <li className="">
          <a
            href="/profile/point"
            className=""
            aria-label=""
            data-attribute-id="lnb"
            data-lnb-kind="points"
          >
            <span>포인트</span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="is-logout"
            data-attribute-id="lnb"
            data-lnb-kind="logout"
          >
            <span>로그아웃</span>
          </button>
        </li>
      </ul>
      <ul className="MenuPopover_list__BzAsJ MenuPopover_mobile__nQmPK">
        <li
          data-attribute-id="lnb"
          data-lnb-kind="myWanted"
          data-badge="true"
          className="MenuPopover_hasNewMywantedAlarm__mobile__rkcti"
        >
          <a href="/mywanted" className="" aria-label="">
            <span>MY 원티드</span>
            <div
              className="profilePic"
           
            >
              <span
                className="Badge_Badge__BJTzL"
               
              >
                <svg width="6" height="6" viewBox="0 0 6 6">
                  <g fill="#fff" fill-rule="nonzero">
                    <path
                      d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                      transform="translate(-123 -375) translate(20 365) translate(98 5)"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </a>
        </li>
        <li data-attribute-id="lnb" data-lnb-kind="profile">
          <a href="/profile/matching" className="" aria-label="">
            프로필
          </a>
        </li>
        <li
          className="MenuPopover_divider__8SsNU"
          data-attribute-id="gnb"
          data-gnb-kind="resume"
        >
          <a href="/cv/list" className="" aria-label="">
            이력서
          </a>
        </li>
        <li data-attribute-id="gnb" data-gnb-kind="matchup">
          <a href="/profile" className="" aria-label="">
            매치업
          </a>
        </li>
        <li data-attribute-id="gnb" data-gnb-kind="refer">
          <a href="/referral" className="" aria-label="">
            추천
          </a>
        </li>
        <li data-attribute-id="lnb" data-lnb-kind="applications">
          <a href="/status/applications" className="" aria-label="">
            지원 현황
          </a>
        </li>
        <li data-attribute-id="gnb" data-gnb-kind="freelancer">
          <a
            href="https://www.wanted.co.kr/gigs/experts"
            className=""
            aria-label=""
            target="_blank"
            rel="noopener noreferrer"
          >
            프리랜서
          </a>
        </li>
        <li
          className="MenuPopover_divider__8SsNU"
          data-attribute-id="gnb"
          data-gnb-kind="salary"
        >
          <a href="/salary" className="" aria-label="">
            직군별 연봉
          </a>
        </li>
        <li data-attribute-id="gnb" data-gnb-kind="event">
          <a href="/events" className="" aria-label="">
            이벤트
          </a>
        </li>
        <li data-attribute-id="gnb" data-gnb-kind="community">
          <a href="/community" className="" aria-label="">
            커뮤니티
            <em>
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                  font-size="9"
                  font-weight="500"
                >
                  <g fill="#36F">
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                  <tspan x="0" y="8">
                                    New
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </em>
          </a>
        </li>
        <li
          className="MenuPopover_divider__8SsNU"
          data-attribute-id="gnb"
          data-gnb-kind="forEmployers"
        >
          <a href="/dashboard">기업 서비스</a>
        </li>
        <li>
          <button
            type="button"
            className="is-logout"
            data-attribute-id="lnb"
            data-lnb-kind="logout"
          >
            <span>로그아웃</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginMyInfo;
