import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { BookMarkAtom } from "../states/BookMarkAtom";

function BookmarkCard({ id, image, title, company, site, money }) {
  const setItem = useSetRecoilState(BookMarkAtom);
  const removeFromBookMark = () => {
    setItem((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <li key={id} id={id}>
      <div data-cy="job-card" className="fatureContainer01">
        <button onClick={removeFromBookMark}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
              fill="white"
            ></path>
            <path
              d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
              fill="blue"
              fillOpacity="0.8"
            ></path>
          </svg>
        </button>

        <img src={image} alt=""></img>
        <div className="fatureContainer01_body">
          <div className="fatureContainer01_1">{title}</div>
          <div className="fatureContainer01_2">{company}</div>
          <div className="fatureContainer01_3">{site}</div>
          <div className="fatureContainer01_4">{money}</div>
        </div>
      </div>
    </li>
  );
}

function BookmarkItem() {
  const [SangPositions, setSangPositions] = useRecoilState(BookMarkAtom);
  return (
    <div className="fatureContainer">
      {SangPositions.map((x) => (
        <BookmarkCard
          id={x.id}
          key={x.id}
          image={x.image}
          title={x.title}
          company={x.company}
          site={x.site}
          money={x.money}
        />
      ))}
    </div>
  );
}

export default BookmarkItem;
