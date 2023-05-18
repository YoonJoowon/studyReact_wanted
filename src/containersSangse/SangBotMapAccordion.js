import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import AccordionButton from "react-bootstrap/AccordionButton";

// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionButton(eventKey, () =>
//     console.log(eventKey)

//   );

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: 'pink' }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

function SangBotMapAccordion() {
  return (
    // {/* <>

    // <Accordion defaultActiveKey="0">
    //       <Card>
    //         <Card.Header>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="0">
    //           <Card.Body>Hello! I'm the body</Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //       <Card>
    //         <Card.Header>
    //           <CustomToggle eventKey="1">Click me!</CustomToggle>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="1">
    //           <Card.Body>Hello! I'm another body</Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //     </Accordion>
    // </> */}

    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="section4_bot_txt">
            본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
            없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
            {/* <AccordionButton eventKey="0">Click me!</AccordionButton> */}
          </Accordion.Header>
          <Accordion.Body>
            본 채용 정보는 이스트엔드에서 제공한 자료를 바탕으로 원티드랩에서
            표현을 수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의
            저작자산이자 영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는
            전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및
            크롤링할 수 없으며, 게재된 채용기업의 정보는 구직자의 구직활동
            이외의 용도로 사용될 수 없습니다. 원티드랩은 이스트엔드에서 게재한
            자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의 내용상
            문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한
            조치에 대해 책임을 지지 않습니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default SangBotMapAccordion;
