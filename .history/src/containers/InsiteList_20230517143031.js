import React, { useState } from "react";
import InsiteTxt from "./Insite.json";
import styled from "styled-components";

function Txt({ id, image, title, summary }) {
  return (
    <li key={id}>
      <div className="box">
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

const InsiteListStyle = styled.div`
  .insiteview {
  }

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
  }

  .insitemenu_view li {
    display: inline-block;
    width: calc(25% - 15px);
    padding: 0 15px 10px 0;
    vertical-align: top;
  }

  .insitemenu_view li:hover {
    transform: translateY(-4px);
    transition: 0.05s ease-out;
  }

  .insitemenu_view .box {
    cursor: pointer;
  }

  .insitemenu_view > li .box .img {
    /* overflow: hidden;
    position: relative;
    height: auto;
    padding-bottom: 70%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.06); */
  }

  .insitemenu_view > li .box .img img {
    position: absolute;
    width: 250px;
    height: 175px;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center;
  }

  .insitemenu_view > li .box .info {
    margin-top: 12px;
  }

  .insitemenu_view > li .box .subject {
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

  .insitemenu_view > li .box .summary {
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

  .insitemenu_view > li .box .icon {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  .insitemenu_view > li .box .icon .img_icon img {
    width: 24px;
    height: 24px;
  }

  .insitemenu_view > li .box .icon .icon_name {
    padding-left: 5px;
    color: #8a8a8a;
    font-size: 12px;
  }

@media screen and (max-width: 1100px){
  
  .insitemenu_view li{
    display: flex;
    padding: 0 15px 10px 0;
    width: 50%;

    .box{
     width: 50%;
     height: 50%;

     .img{
      margin: auto;
     }
    }
  }
}

`;
