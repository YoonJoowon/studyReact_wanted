import React, { useState } from 'react';
import './App.css';

function Insite(){
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: '안전하고 쉬운 해외 부동산 투자를 위해ㅣ이지웅 빌드블록 부대표',
          summary: '‘누구나 안전하고 쉽게 부동산 투자하는 세상’을 꿈꾸는 빌드블록의 성장 비밀은 무엇일까. 고인물은 살아남을 수 없다는 생존형 스타트업 ‘빌드블록’의 이지웅 부대표를 만나봤다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FNcEwC6tr5LU%2Fhq720_2.jpg%3Fsqp%3D-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE%3D%26rs%3DAOn4CLA0BLz_o58fbcgnH6LLa3W0fAUHRw&w=750&q=100',
        },
        {
          id: 2,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 3,
          title: '끝나지 않는 코로나, 비대면 조직문화 활성화를 위한 과제 - 송창용',
          summary: '코로나 19의 충격파는 이미 20세기 초 세계 대 공황을 넘어선지 오래입니다. 비대면 상황에서도 나름의 길을 찾아요.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 4,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 5,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 6,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 7,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 8,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 9,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 10,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 11,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2328%2Fbc433b89.jpg&amp;w=1200&amp;q=90',
        },
        {
          id: 12,
          title: '지옥철이 지겹다면, ‘언제든’ 이곳 바다로 오세요',
          summary: '제주에서의 색다른 경험과 잠깐의 휴식이 가져다 주는 충전은 어디에서도 쉽게느낄 수 없는 제주 위케이션 만의 선물입니다.',
          image: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2126%2Fff86edbf.jpg&w=1200&q=90',
        },
      ]);
      
    return(
    <ul className='insitemenu_view'>
        {articles.map((article) => (
        <li key={article.id}>
            <div className="box">
            <div className="img">
                <img src={article.image} alt={article.title} loading="lazy" />
            </div>
            <div className="info">
                <p className="subject">{article.title}</p>
                <p className="summary">{article.summary}</p>
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
        ))}
    </ul>
    )
}




export default Insite;