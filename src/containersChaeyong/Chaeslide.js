import React, { useState } from 'react';
import '../css/App_chae.css'

function Chaeslide() {


    return (
        <div>
            <section className="main1">
                <article className="slide">

                    <div className="slideImg" >
                        <div id="slideShow">
                            <ul className="slides">
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100" alt="당신의 모빌리티 파트너, TMAP" className="Image_Image__image__Y2rLN"/>
                                    <div className="subSlide">
                                        <h2>복지는 좋은데, 커리어는?</h2>
                                        <h3>유명 IT기업 개발자가 선택한 회사</h3>
                                        <hr className="subSlide01"/>
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
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2008%2F75ffb8c1.jpg&amp;w=1060&amp;q=100" alt="프롭테크의 선두주자 SK D&amp;D" className="Image_Image__image__Y2rLN"/>
                                </li>
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1988%2F8b6272dd.jpg&amp;w=1060&amp;q=100" alt="흔들림 없이 성장하니까," className="Image_Image__image__Y2rLN"/>
                                </li>
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2009%2Fbc01ec3d.jpg&amp;w=1060&amp;q=100" alt="당신의 모빌리티 파트너, TMAP" className="Image_Image__image__Y2rLN"/>
                                </li>
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2001%2F077a568f.jpg&amp;w=1060&amp;q=100" alt="'100억' 투자받은 XYZ" className="Image_Image__image__Y2rLN"/>
                                </li>
                                <li><img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1993%2F16ebbe65.jpg&amp;w=1060&amp;q=100" alt="프리온보딩 프론트엔드 인턴십 (4월)"/></li>
                            </ul>
                            <p className="controller">
                                <button type="button" className="prev" aria-label="previous button">
                                    <span className="">
                                        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                                            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z">

                                            </path>
                                        </svg>
                                    </span>
                                </button>

                                <button type="button" className="next" aria-label="next button">
                                    <span className="">
                                        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                </article>
            </section>


        </div>
    )
}

export default Chaeslide;