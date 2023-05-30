import { useSwiper } from "swiper/react";
import styled from "styled-components";

export default function SangSlideNextutton() {
  const swiper = useSwiper();

  return (
    <StyledWrapp className="main-slide-next-button">
      <button onClick={() => swiper.slideNext()}>
        <svg viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </button>
    </StyledWrapp>
  );
}
const StyledWrapp = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 60px;
    opacity: 0.2;
    border-radius: 15px;
    font-size: 16px;
    z-index: 3;
    background-color: #ffffff;
    cursor: pointer;

    svg {
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: black;
    }
  }
`;
