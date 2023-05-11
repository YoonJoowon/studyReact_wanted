import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Bookmark() {
  const bookmarkList = useSelector((state) => state);
  // console.log(book)
  return (
    <BookmarkStyle>
      <section className="section5">
        <article className="feature">
          <h2>북마크</h2>
          <div className="fatureContainer">
            <ul
              data-cy="job-list"
              dangerouslySetInnerHTML={{
                __html: bookmarkList
                  .map((item, index) => `<li key=${index}>${item}</li>`)
                  .join(""),
              }}
            ></ul>
          </div>
        </article>
      </section>
    </BookmarkStyle>
  );
}

export default Bookmark;

const BookmarkStyle = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  height: 2500px;
  .wraaper {
    background-color: #fafafa;
    width: 100%;
    height: 100%;
  }

  .feature {
    width: 1060px;
    padding: 70px 0px;
    margin: auto;
    height: 1000px;
  }

  .feature h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    color: #111;
    margin-bottom: 30px;
    margin-top: 50px;
  }

  .fatureContainer {
    margin: auto;
  }

  .fatureContainer ul {
    margin: -10px;
    margin: auto;
  }

  .fatureContainer ul li {
    padding: 5px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    width: 250px;
    margin-bottom: 30px;
  }

  .fatureContainer ul img {
    width: 250px;
    height: 187.5px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    /* padding-bottom: 75%; */
    position: relative;
    background-size: cover;
  }

  .fatureContainer01 {
    display: block;
    position: relative;
  }

  .fatureContainer01 .bookmarkBtn {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 30px;
    border-radius: 3px;
    margin-right: 1200px;
  }

  .fatureContainer01_body {
    width: 250px;
  }

  .fatureContainer01_1 {
    text-overflow: ellipsis;
    position: relative;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    word-break: break-word;
    width: 250px;
    margin-right: 0px;
    margin-top: 10px;
  }

  .fatureContainer01_2 {
    font-size: 14px;
    line-height: normal;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
    color: #333;
    font-weight: 600;
  }

  .fatureContainer01_3 {
    font-size: 14px;
    line-height: normal;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }

  .fatureContainer01_4 {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    word-break: break-word;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
