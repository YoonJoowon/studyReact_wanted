import React, { useState } from 'react';
import './App_chae.css';

function Chae_Position(){

    const [articles, setArticles] = useState([
        {
            id: 1,
            title: '전략기획 ',
            name: '아이엔지스토리',
        },
        {
            id: 2,
            title: '해외 파트너십 마케팅',   
            name: '스와치온(SwatchOn)',
        },
        {
            id: 3,
            title: '#Sales Account Executive [AE팀]',   
            name: '원티드랩',
        },
        {
            id: 4,
            title: '콘텐츠 마케터',   
            name: '코스트',
        },
        
      ]);



    return(
        <section>
            <article className="feature">
                <h2>요즘 뜨는 포지션</h2>
                    <div className="fatureContainer">
                        <ul data-cy="job-list">
                            <li>
                                <div data-cy="job-card" className="fatureContainer01">
                                    <button className="bookmarkBtn" type="button" aria-label="bookmark button" data-attribute-id="position__bookmark__click" data-kind="add" data-job-category-id="523" data-job-category="Marketing &amp; Advertising" data-company-id="39517" data-company-name="아이엔지스토리" data-position-id="152842" data-position-name="전략기획">
                                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                                            <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path>
                                        </svg>
                                    </button>
                                    <img src = 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F39517%2F8coxxmptdjimx8kk__400_400.jpg&amp;w=400&amp;q=75&quot;'>

                                    </img>
                                    <div className="fatureContainer01_body">
                                        <div className="fatureContainer01_1">{articles[0].title}</div>
                                        <div className="fatureContainer01_2">{articles[0].name}</div>
                                        <div className="fatureContainer01_3">서울<span className="addressDot">.</span><span>한국</span></div>
                                        <div className="fatureContainer01_4">채용보상금 1,000,000원</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div data-cy="job-card" className="fatureContainer02">
                                    <button className="bookmarkBtn" type="button" aria-label="bookmark button" data-attribute-id="position__bookmark__click" data-kind="add" data-job-category-id="523" data-job-category="Marketing &amp; Advertising" data-company-id="8177" data-company-name="스와치온(SwatchOn)" data-position-id="151227" data-position-name="해외 파트너십 마케팅">
                                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                                            <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path>
                                        </svg>
                                    </button>
                                    <img src = 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8177%2Ffr3dtvmomfzj6gbr__400_400.jpeg&amp;w=400&amp;q=75&quot;'>

                                    </img>
                                    <div className="fatureContainer01_body">
                                        <div className="fatureContainer01_1">{articles[1].title}</div>
                                        <div className="fatureContainer01_2">{articles[1].name}</div>
                                        <div className="fatureContainer01_3">서울<span className="addressDot">.</span><span>한국</span></div>
                                        <div className="fatureContainer01_4">채용보상금 1,000,000원</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div data-cy="job-card" className="fatureContainer03">
                                    <button className="bookmarkBtn" type="button" aria-label="bookmark button" data-attribute-id="position__bookmark__click" data-kind="add" data-job-category-id="530" data-job-category="Sales" data-company-id="79" data-company-name="원티드랩" data-position-id="152319" data-position-name="Sales Account Executive [AE팀]">
                                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                                            <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path>
                                        </svg>
                                    </button>
                                    <img src = 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F79%2Fno3ey0e5mjbismfq__400_400.jpg&amp;w=400&amp;q=75&quot;'>
                                    </img>
                                    <div className="fatureContainer01_body">
                                        <div className="fatureContainer01_1">{articles[2].title}</div>
                                        <div className="fatureContainer01_2">{articles[0].name}</div>
                                        <div className="fatureContainer01_2_2">
                                            <button className="fatureContainer01_2_2btn1" type="button">
                                                <div className="fatureContainer01_2_2btn2">
                                        </div>
                                        <div className="fatureContainer01_2_3">응답률 매우 높음</div>
                                            </button>
                                        </div>
                                        <div className="fatureContainer01_3">서울<span className="addressDot">.</span><span>한국</span></div>
                                        <div className="fatureContainer01_4">채용보상금 1,000,000원</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div data-cy="job-card" className="fatureContainer04">
                                    <button className="bookmarkBtn" type="button" aria-label="bookmark button" data-attribute-id="position__bookmark__click" data-kind="add" data-job-category-id="523" data-job-category="Marketing &amp; Advertising" data-company-id="35834" data-company-name="코스트" data-position-id="152265" data-position-name="콘텐츠 마케터">
                                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                                            <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path>
                                        </svg>
                                    </button>
                                    <img src = 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35834%2Fb8iiph247mvbglh8__400_400.jpg&amp;w=400&amp;q=75&quot;'>
                                    </img>
                                    <div className="fatureContainer01_body">
                                        <div className="fatureContainer01_1">{articles[3].title}</div>
                                        <div className="fatureContainer01_2">{articles[3].title}</div>
                                        <div className="fatureContainer01_3">서울<span className="addressDot">.</span><span>한국</span></div>
                                        <div className="fatureContainer01_4">채용보상금 1,000,000원</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </article>
        </section>
    )
}

export default Chae_Position;