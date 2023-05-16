import React, { useState } from "react";
import InsiteTxt from "./Insite.json";

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
  );
}

export default InsiteList;
