import React, { useState } from 'react';

function InsiteBar() {

    const [articles, setArticles] = useState([
        {
            id: 1,
            title: '조직문화',
        },
        {
            id: 2,
            title: '회사생활',
        },
        {
            id: 3,
            title: '인간관계',
        },
        {
            id: 4,
            title: '리더십',
        },
        {
            id: 5,
            title: 'IT/기술',
        },
        {
            id: 6,
            title: '취업/이직',
        },
        {
            id: 7,
            title: '커리어고민',
        },
        {
            id: 8,
            title: '라이프스타일',
        },
        {
            id: 9,
            title: '노무',
        },


    ]);

    return (
        <div className="insitewrap_flex">
            <div className="insite_button">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><span>{articles[0].title}</span></div>
                    <div className="swiper-slide"><span>{articles[1].title}</span></div>
                    <div className="swiper-slide"><span>{articles[2].title}</span></div>
                    <div className="swiper-slide"><span>{articles[3].title}</span></div>
                    <div className="swiper-slide"><span>{articles[4].title}</span></div>
                    <div className="swiper-slide"><span>{articles[5].title}</span></div>
                    <div className="swiper-slide"><span>{articles[6].title}</span></div>
                    <div className="swiper-slide"><span>{articles[7].title}</span></div>
                    <div className="swiper-slide"><span>{articles[8].title}</span></div>
                    {/* <!-- <div className="swiper-slide"><span>데이터</span></div> -->
                    <!-- <div className="swiper-slide"><span">개발</span></div>
                    <div className="swiper-slide"><span">경영/전략</span></div>
                    <div className="swiper-slide"><span">서비스기획</span></div>
                    <div className="swiper-slide"><span">마케팅</span></div>
                    <div className="swiper-slide"><span">브랜딩</span></div>
                    <div className="swiper-slide"><span">UX/UI</span></div>
                    <div className="swiper-slide"><span">디자인</span></div>
                    <div className="swiper-slide"><span">콘텐츠 제작</span></div>
                    <div className="swiper-slide"><span">HR</span></div>
                    <div className="swiper-slide"><span">MD</span></div> --> */}
                    <div className="swipter_btn1">
                        <button type="button" className="swipter_btnL">
                            <span className="swiperArrow">
                                <svg className="swiperArrowL" viewBox="0 0 18 18">
                                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z">

                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="swipter_btn2">
                        <button type="button" className="swipter_btnR">
                            <span className="swiperArrow">
                                <svg className="swiperArrowR" viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">

                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <button type="button" className="btnDot">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z">

                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default InsiteBar;