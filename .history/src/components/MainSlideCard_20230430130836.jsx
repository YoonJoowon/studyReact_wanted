import styled from "styled-components";

function MainSlideCard(props) {
  const { header, content, linkSrc } = props;
  return (
    <SlideCardStyle className="main-slide-card">
      <div>
        <h2>{header}</h2>
        <h3>{content}</h3>
        <div className="line" />
        <a href={linkSrc || "./"}>
          <div>바로가기 {">"}</div>
        </a>
      </div>
    </SlideCardStyle>
  );
}

export default MainSlideCard;

const SlideCardStyle = styled.div`
  font-family: inherit;
  position: absolute;
  bottom: 24px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #ffffff;
  opacity: 0;
  text-align: left;
  left: 24px;
  transition: all 0.4s;
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 20px 20px 0 20px;
    line-height: 1.5;
    color: #333;
  }
  h3 {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    font-weight: 500;
    color: #333;
  }
  .line {
    height: 1px;
    width: 100%;
    color: #333;
  }
  a div {
    margin: 6px 0 0 13px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #36f;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 6px 8px;
    text-decoration: none;
  }
`;
