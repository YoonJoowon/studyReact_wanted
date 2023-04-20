import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function Slide() {
    // const [currentIdx, setCurrentIdx] = useState(0);
    // const [slideCount, setSlideCount] = useState(0);
    // const [slideWidth, setSlideWidth] = useState(1084);
    // const [slideMargin, setSlideMargin] = useState(0);
    
    // const slides = document.querySelector('.slides');
    // const slideImg = slides.querySelectorAll('.slides li');


    // makeClone(); // 처음이미지와 마지막 이미지 복사 함수
    // initfunction(); //슬라이드 넓이와 위치값 초기화 함수

    // function makeClone() {
    //     let cloneSlide_first = slideImg[0].cloneNode(true);
    //     let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    //     slides.append(cloneSlide_first);
    //     slides.insertBefore(cloneSlide_last, slides.firstElementChild);
    // }

    // // 초기화 함수
    // function initfunction() {
    //     slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
    //     slides.style.left = -(slideWidth + slideMargin) + 'px';
    // }
      

    // useEffect(() => {
    //     prev = document.querySelector('.prev'); //이전 버튼
    //     next = document.querySelector('.next'); //다음 버튼


    // })

    return (
        <section className="main1">
            <article className="slide">
                <div className="slideImg" >
                    <div id="slideShow">
                        <p className="controller">
                            {/* 이전 버튼 */}
                            <button type="button" className="prev">
                                <span className="">
                                    <svg className="" viewBox="0 0 18 18">
                                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z">

                                        </path>
                                    </svg>
                                </span>
                            </button>

                            {/* 다음 버튼 */}
                            <button type="button" className="next">
                                <span className="">
                                    <svg className="" viewBox="0 0 18 18">
                                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </p>


                        <ul className="slides">
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100" alt="당신의 모빌리티 파트너, TMAP" className="Image_Image__image__Y2rLN"></img>
                                <div className="subSlide">
                                    <h2>프리온보딩 프론트엔드 인턴십</h2>
                                    <h3>기업이 진짜 원하는 프론트엔드 주니어</h3>
                                    <hr className="subSlide01"></hr>
                                    <a href="/company/1571" className="subSlide02" aria-label="">
                                        <span className="subSlide03">바로가기
                                            <span className="subSlide04"></span>
                                            <span className="subSlide05">
                                                <svg className="subSlide06" viewBox="0 0 18 18">
                                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100" alt="프리온보딩 프론트엔드 인턴십 (4월)"></img>
                            </li>
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100" alt="흔들림 없이 성장하니까," className=""></img>
                            </li>
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2008%2F75ffb8c1.jpg&amp;w=1060&amp;q=100" alt="프롭테크의 선두주자 SK D&amp;D" className=""></img>
                            </li>
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100" alt="'100억' 투자받은 XYZ" className=""></img>
                            </li>
                            <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1991%2Fd44d240d.jpg&w=1060&q=100" alt=""></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>


    )
}




export default Slide; 