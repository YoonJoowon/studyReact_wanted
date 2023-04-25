import React from "react";

function SangBotMap() {
  return (
    <section className="section4">
      <div className="section4_top">
        <div className="section4_top_1">
          <div className="section4_top_text1">마감일</div>
          <div className="section4_top_text2">2022.11.28</div>
        </div>
        <div className="section4_top_1">
          <div className="section4_top_text1">근무지역</div>
          <div className="section4_top_text2">
            서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
          </div>
        </div>
        <div>
          <a
            className=""
            href="https://map.naver.com/?dlevel=13&amp;pinTitle=서울특별시 용산구 한강대로 366 트윈시티 남산&amp;lat=37.5511247&amp;lng=126.9729133"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              alt="Map with company address"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjhfODkg%2FMDAxNjQ4NDc4MjE4NTYz.p2LFzI3uXxH-hWnhhEZ9lv9KQAStSBZF8H8wg_gkUyMg.Dx4fyIHh6w7gCsZyMzVQEwjUP8HGuSjCD8EQB74PuIcg.PNG.pmh6927%2F20220328_233504.png&type=sc960_832"
            />
          </a>
        </div>
      </div>
      <div className="section4_mid">
        <div
          className="section4_mid_logo"
          style={{
            backgroundImage: `url(https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg)`,
          }}
        ></div>
        <div className="section4_mid_1">
          <div className="section4_mid_logo1">블루비커</div>
          <div className="section4_mid_logo2">iT, 컨텐츠</div>
        </div>
        <div>
          <button
            className="section4_mid_btn"
            data-attribute-id="company__follow__click"
            data-kind="add"
          >
            <span className="">팔로우</span>
          </button>
        </div>
      </div>

      <div className="section4_bot">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="currentColor" fillRule="evenodd">
            <path
              fillRule="nonzero"
              d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
            ></path>
            <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
            <path
              fillRule="nonzero"
              d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
            ></path>
          </g>
        </svg>
        <div className="section4_bot_txt">
          본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
          없으며, <br /> 구직활동 이외의 용도로 사용할 수 없습니다.
        </div>
        <svg className="section4_bot_arrow" viewBox="0 0 19 19">
          <path
            d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default SangBotMap;
