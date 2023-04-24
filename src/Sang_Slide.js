import React, { useEffect, useState } from 'react';
import './App_Sang.css';

function Sang_Slide() {

    // slide2
    const prevButton = document.querySelector('.section1_btn_left');
    const nextButton = document.querySelector('.section1_btn_right');
    const section1_img00_1 = document.querySelector('.section1_img00_1');

    let index = 0;

    prevButton.addEventListener('click', () => {
        if (index === 0) {
            return
        }
        index -= 1;

        section1_img00_1.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
    });

    nextButton.addEventListener('click', () => {
        if (index === 3) {
            return
        }
        index += 1;

        section1_img00_1.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
    });

    return (

        <div>
            <div className="section1_btn">
                <button type="button" className="section1_btn_left">
                    <svg width="24" height="24" viewBox="0 0 12 12">
                        <path fill="#b5b5b5" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z">

                        </path>
                    </svg>
                </button>

                <button type="button" className="section1_btn_right">
                    <svg width="24" height="24" viewBox="0 0 12 12">
                        <path fill="#b5b5b5" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z">

                        </path>
                    </svg>
                </button>
            </div>

            <div className="section1_img00">
                <div className="section1_img00_1">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&amp;w=1000&amp;q=75" alt="블루비커 - 웹 프론트엔드 개발자(React)" />

                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&amp;w=1000&amp;q=75" alt="블루비커 - 웹 프론트엔드 개발자(React)" />

                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&amp;w=1000&amp;q=75" alt="블루비커 - 웹 프론트엔드 개발자(React)" />

                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&amp;w=1000&amp;q=75" alt="블루비커 - 웹 프론트엔드 개발자(React)" />
                </div>
            </div>
        </div>
    );
}

export default Sang_Slide;