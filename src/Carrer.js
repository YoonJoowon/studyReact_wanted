import React, { useState } from 'react';
import './App.css';

function Carrer() {
    const [articles, setArticles] = useState([
        {
            id: 1,
            box: '교육',
            title: '스타트업 노무관리 전문가 양성과정 2기',
            summary: '2023.06.14 (수)',
        },
        {
            id: 2,
            box: '아티클',
            title: '채용 담장자를 사로잡는 경력직 이력서 쓰는 법',
            summary: '',
            image: '',
        }
    ]);

    return (
        <section>
            <article class="main4">
                <div class="main4card1">
                    <div class="title00">
                        <div class="main4SubTitle">
                            <button type="button" class="subTitleBtn1" aria-label="previous button" disabled="">
                                <span class="subTitleBtn1_1">
                                    <svg class="subTitleBtn1_2" viewBox="0 0 18 18">
                                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                                    </svg>
                                </span>
                            </button>

                            <div class="subTitletxt">
                                <h2 class="subTitletxt1">커리어 성장을 위한 맞춤 이벤트</h2>
                            </div>

                            <button type="button" class="subTitleBtn2" aria-label="next button">
                                <span class="subTitleBtn2_1">
                                    <svg class="subTitleBtn2_2" viewBox="0 0 18 18">
                                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div class="main4SubTitle2">
                            <div class="main4SubTitle2txt">이벤트 전체보기</div><span class=""><svg xmlns="https://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.34467 8.24802C0.0517767 8.51161 0.0517767 8.93898 0.34467 9.20257C0.637563 9.46617 1.11244 9.46617 1.40533 9.20257L5.65533 5.37773C5.94822 5.11414 5.94822 4.68677 5.65533 4.42317L1.40533 0.59833C1.11244 0.334736 0.637563 0.334736 0.34467 0.59833C0.0517767 0.861923 0.0517767 1.28929 0.34467 1.55288L4.06434 4.90045L0.34467 8.24802Z" fill="currentColor"></path></svg></span>
                        </div>
                    </div>

                    <div class="subcard00">
                        <div class="subcard1">
                            <div class="subCard1_img00">
                                <img class="subCard1_img00" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2740%2F8d7447f4.jpg&amp;w=1200&amp;q=100" alt="스타트업 노무관리 전문가 양성과정 2기" loading="lazy"></img>
                            </div>

                            <div class="subCard1_bot">
                                <div class="subCard1_bot_txt">
                                    <div class="subCard1Education">
                                        <span class="subCard1Education2">{articles[0].box}</span>
                                    </div>
                                    <div class="subCard1_txt">{articles[0].title}</div>
                                    <div class="subCard1_txt2">{articles[0].summary}</div>
                                </div>
                            </div>
                        </div>

                        <div class="subcard2">
                            <div class="subCard2_img00">
                                <img class="subCard2_img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2669%2F22da8214.jpg&amp;w=1200&amp;q=100" alt="채용 담당자를 사로잡는 경력직 이력서 쓰는 법" loading="lazy"></img>
                            </div>

                            <div class="subCard2_bot">
                                <div class="subCard2_bot_txt">
                                    <span class="subCard2Article">
                                        <span class="subCard2Article2">{articles[1].box}</span>
                                    </span>
                                    <div class="subCard2_txt">{articles[1].title}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </section>

    )
}

export default Carrer;