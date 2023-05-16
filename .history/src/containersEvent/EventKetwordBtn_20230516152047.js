import React from "react";
import styled from "styled-components";

function EventKetwordBtn() {
  return (
    <EventKetwordBtnStyle>
      <button>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
          class="NotificationManager_NotificationManager_icon__l78H_"
        >
          <path
            d="M5.385 13H8.615C8.38 13.583 7.745 14 7 14C6.254 14 5.62 13.583 5.385 13ZM7 15C8.522 15 9.755 13.829 9.755 12.384C9.755 12.094 9.508 11.86 9.205 11.86H1.856C1.553 11.86 1.326 11.847 1.172 11.823L1.236 11.708C1.271 11.648 1.583 11.145 1.686 10.964C2.154 10.151 2.407 9.405 2.407 8.547V5.407C2.407 2.937 4.422 1.047 6.999 1.047C9.576 1.047 11.591 2.937 11.591 4.407C11.594 4.711 11.842 4.957 12.146 4.957H12.149C12.449 4.957 12.693 4.713 12.693 4.413V4.407C12.694 2.356 10.182 0 7 0C3.818 0 1.306 2.356 1.306 5.407V8.547C1.306 9.204 1.107 9.79 0.72 10.463C0.628 10.625 0.318 11.123 0.273 11.201C0.089 11.516 0 11.733 0 11.975C0 12.701 0.62 12.907 1.857 12.907H4.3C4.555 14.101 5.667 15 7 15Z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.433 6.6C13.737 6.6 13.983 6.846 13.983 7.15V9.516H16.35C16.623 9.516 16.85 9.716 16.893 9.977L16.9 10.067V10.133C16.9 10.437 16.654 10.683 16.35 10.683H13.983V13.05C13.983 13.354 13.737 13.6 13.433 13.6H13.367C13.063 13.6 12.817 13.354 12.817 13.05L12.816 10.683H10.45C10.177 10.683 9.94999 10.483 9.90699 10.223L9.89999 10.133V10.067C9.89999 9.763 10.146 9.517 10.45 9.517L12.816 9.516V7.15C12.816 6.846 13.063 6.6 13.366 6.6H13.433V6.6Z"
            fill="#fff"
          ></path>
        </svg>
        <span>키워드 알림 신청</span>
      </button>
    </EventKetwordBtnStyle>
  );
}

export default EventKetwordBtn;

const EventKetwordBtnStyle = styled.div`
  button {
    align-items: center;
    justify-content: center;
    position: relative;
    height: 40px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 9999px;
    background-color: #36f;
    margin-left: auto;
    white-space: nowrap;
    color: #fff;

    span {
      font-size: 12px;
    }
  }
`;
