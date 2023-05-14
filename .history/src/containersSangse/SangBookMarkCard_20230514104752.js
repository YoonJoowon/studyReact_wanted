import React, { useEffect, useState } from "react";
import SangBookMarkBtn from "./SangBookMarkBtn";
import styled from "styled-components";
import txt from "./SangPosition.json";
import { useRecoilState, useSetRecoilState } from "recoil";
import { BookMarkAtom } from "../states/BookMarkAtom";

function SangBookMark({ id, image, title, company, site, money }) {
  // 아톰 불러오기
  const [cartItem, setCartItem] = useRecoilState(BookMarkAtom);

  // 이미 장바구니에 들어있는지 확인
  const isAlreadyInCart = cartItem.findIndex((e) => e.id === id) > -1;

  const AddToCart = () => {
    if (!isAlreadyInCart) {
      setCartItem((prev) => [
        ...prev,
        { id, image, title, company, site, money },
      ]);
    }
    
    console.log(setCartItem)
  };

  return (
    <SangBookMarkStyle id={id}>
      <div data-cy="job-card" className="fatureContainer01">
        <button onClick={AddToCart}>
          <SangBookMarkBtn />
        </button>

        <img src={image} alt=""></img>
        <div className="fatureContainer01_body">
          <div className="fatureContainer01_1">{title}</div>
          <div className="fatureContainer01_2">{company}</div>
          <div className="fatureContainer01_3">{site}</div>
          <div className="fatureContainer01_4">{money}</div>
        </div>
      </div>
    </SangBookMarkStyle>
  );
}

function SangBookMarkCard() {
  const [SangPositions, setSangPositions] = useState(txt);
  return (
    <div className="fatureContainer">
      {SangPositions.map((x) => (
        <SangBookMark
          id={x.id}
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

export default SangBookMarkCard;

const SangBookMarkStyle = styled.li`
  display: inline-block;
`;
