import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SangSkillBtn() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Git",
    },
    {
      id: 2,
      title: "Azure",
    },
    {
      id: 3,
      title: "React",
    },
    {
      id: 4,
      title: "JavaScript",
    },
    {
      id: 5,
      title: "TypeScript",
    },
    {
      id: 6,
      title: "Redux",
    },
    {
      id: 7,
      title: "Next.js",
    },
  ]);

  return (

      <div className="section3_skill">
        <div className="section3_skill_set">{articles[0].title}</div>
        <div className="section3_skill_set">{articles[1].title}</div>
        <div className="section3_skill_set">{articles[2].title}</div>
        <div className="section3_skill_set">{articles[3].title}</div>
        <div className="section3_skill_set">{articles[4].title}</div>
        <div className="section3_skill_set">{articles[5].title}</div>
        <div className="section3_skill_set">{articles[6].title}</div>
      </div>

  );
}

export default SangSkillBtn;
