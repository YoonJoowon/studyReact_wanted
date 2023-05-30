import React, { useState } from "react";
import InsiteTxt from "./Insite.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const InsiteListStyle = styled.div`
  .insite_button {
    position: relative;
    display: flex;
    max-width: calc(100% - 40px - 8px);
  }

  .insiteview ul {
    display: block;
    width: auto;
    margin-right: -15px;
    font-size: 0;
    margin-top: 15px;
    max-width: 1060px;
  }

  .insitemenu_view li {
    display: inline-block;
    position: relative;
    width: calc(25% - 15px);
    padding: 0 15px 10px 0;
    vertical-align: top;
  }

  .insitemenu_view li:hover {
    transform: translateY(-4px);
    transition: all 0.1s ease-out;
    cursor: pointer;
  }

  .insitemenu_view > li .img {
    overflow: hidden;
    position: relative;
    height: auto;
    padding-bottom: 70%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .insitemenu_view > li .img img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center;
    max-width: 100%;
    max-height: 100%;
  }

  .insitemenu_view > li .info {
    margin-top: 12px;
  }

  .insitemenu_view > li .subject {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #171717;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }

  .insitemenu_view > li .summary {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 5px;
    color: #8a8a8a;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
  }

  .insitemenu_view > li .icon {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  .insitemenu_view > li .icon .img_icon img {
    width: 24px;
    height: 24px;
  }

  .insitemenu_view > li .icon .icon_name {
    padding-left: 5px;
    color: #8a8a8a;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .insitemenu_view {
      width: 90%;

      li {
        width: calc((100% - 60px) / 3);
      }
    }
  }

  /* 700px 이하 */
  @media (max-width: 768px) {
    .insitemenu_view li {
      width: calc((100% - 40px) / 2);
    }
  }
`;

function Txt({ id, image, title, summary }) {
  const navigate = useNavigate();
  return (
    <li key={id}>
      <div className="img">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="info">
        <p className="subject">{title}</p>
        <p className="summary">{summary}</p>
      </div>
      <div className="icon">
        <span className="img_icon">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&amp;w=60&amp;q=90"
            alt="Wanted"
            className=""
          />
        </span>
        <span className="icon_name">Wanted</span>
      </div>
    </li>
  );
}

function InsiteList() {
  const [articles, setArticles] = useState(InsiteTxt);

  return (
    <InsiteListStyle>
      <div className="insiteview">
        <ul className="insitemenu_view">
          {articles.map((article) => (
            <Txt
              key={article.id}
              title={article.title}
              image={article.image}
              summary={article.summary}
            />
          ))}
        </ul>
      </div>
    </InsiteListStyle>
  );
}

export default InsiteList;
