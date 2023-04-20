import logo from './logo.svg';
import './App.css';
import Insite from './Insite';
import Carrer_ from './Carrer_';
import Btn_round from './Btn_round';
import Slide from './Slide';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  return (
    <div className='wrapper'>
      <div>
        <div className="nav">
          <nav>
            <div className="nav_cen">
                <div className="nav_cen_logo">
                    <div className='nav_cen_img'></div>
                    <p><svg width="74" height="21" viewBox="0 0 140 32"><path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"></path></svg></p>
                </div>
                <ul>
                    <li>채용</li>
                    <li>이벤트</li>
                    <li>직군별 연봉</li>
                    <li>이력서</li>
                    <li>커뮤니티</li>
                    <li>프리랜서</li>
                    <li>AI합격예측</li>
                </ul>
              <div class="aside">
                <button class="asideImg" type="button">
                </button>
                <button id="login" type="button">회원가입/로그인</button>
                <p>
                  <Btn_round>기업 서비스</Btn_round>
                </p>
              </div>
            </div>
          </nav>
      </div>
    </div>  

    <Modal/>

    <section class="main1">
        <article class="slide">
            <div class="slideImg" > 
              <Slide></Slide>
            </div>
        </article>
    </section>

    <section class="main2">
            <div class="section1">
                <div class="careerinsite">
                    <div class="careerinsite_text">
                        <h2>나에게 필요한 커리어 인사이트</h2>
                    </div>
                    <div class="careerinsite_img">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="section2">
                <div class="insitewrap">
                    <div class="insitewrap_flex">
                        <div class="insite_button">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><span>조직문화</span></div>
                                <div class="swiper-slide"><span>회사생활</span></div>
                                <div class="swiper-slide"><span>인간관계</span></div>
                                <div class="swiper-slide"><span>리더십</span></div>
                                <div class="swiper-slide"><span>IT/기술</span></div>
                                <div class="swiper-slide"><span>취업/이직</span></div>
                                <div class="swiper-slide"><span>커리어고민</span></div>
                                <div class="swiper-slide"><span>라이프스타일</span></div>
                                <div class="swiper-slide"><span>노무</span></div>
                                {/* <!-- <div class="swiper-slide"><span>데이터</span></div> -->
                                <!-- <div class="swiper-slide"><span">개발</span></div>
                                <div class="swiper-slide"><span">경영/전략</span></div>
                                <div class="swiper-slide"><span">서비스기획</span></div>
                                <div class="swiper-slide"><span">마케팅</span></div>
                                <div class="swiper-slide"><span">브랜딩</span></div>
                                <div class="swiper-slide"><span">UX/UI</span></div>
                                <div class="swiper-slide"><span">디자인</span></div>
                                <div class="swiper-slide"><span">콘텐츠 제작</span></div>
                                <div class="swiper-slide"><span">HR</span></div>
                                <div class="swiper-slide"><span">MD</span></div> --> */}
                                <div class="swipter_btn1">
                                    <button type="button" class="swipter_btnL">
                                    <span class="swiperArrow">
                                        <svg class="swiperArrowL" viewBox="0 0 18 18">
                                            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z">

                                            </path>
                                        </svg>
                                    </span>
                                    </button>
                                </div>
                                <div class="swipter_btn2">
                                    <button type="button" class="swipter_btnR">
                                    <span class="swiperArrow">
                                        <svg class="swiperArrowR" viewBox="0 0 18 18">
                                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">

                                            </path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="button" class="btnDot">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z">

                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="insiteview">
                      <Insite></Insite>
                    </div>
                </div>                
            </div>
        </section>

        <section>
            <div class="main3">
                <div class="maint3_container">
                    <div class="main3_img">
                        <div class="main3_img_txt">
                            <div class="main3_img_txt1">내 유형과 가장 어울리는 회사는?</div>
                            <div class="main3_img_txt2">유형테스트 하러가기<span class="TypeTestBannerRow_ArrowContainer__YwMY_"><span class="SvgIcon_SvgIcon__root__8vwon"><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></span></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <article>
                <div class="banner00">
                    <div class="banner00_container">
                        <div class="banner00_txt1">즐겨보는 크리에이터의 글도 추천하고 싶다면?</div>

                        <div class="banner00_txt2">크리에이터 추천하기 <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></div>
                    </div>

                    <div><img class="banner00_img" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90" alt="크리에이터 추천하기" loading="lazy"></img></div>
                </div>

                <div class="banner_line"><hr class="banner_line_line"></hr></div>            

                <div class="banner">
                    <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.<em class="LineBanner_LineBanner__emoji__69eEU">👀</em><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></p>
                </div>

                <button type="button" class="banner00_btn">
                    <span class="banner00_btn1">
                        <svg class="banner00_btn_img" viewBox="0 0 24 24">
                            <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z">

                            </path>
                        </svg>
                    </span>
                </button>
            </article>
        </section>

        

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

                    <Carrer_></Carrer_>
                </div>

            </article>
        </section>

        <section class="main5">
            <div class="main5_1">
                <div class="main5_banner">
                    <div class="main5_banner_txt">
                        <h2>채용 정보를 찾고 계셨나요?</h2>
                    </div>
                </div>

                <div class="main5_container">
                    <div class="main5_container1">
                        <a class="" data-attribute-id="home__recruit__click" data-kind="position" href="/wdlist"><span class="SvgIcon_SvgIcon__root__8vwon"><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path></svg></span></a>
                        <div class="main5_container1_txt">
                            <button class="" data-attribute-id="home__recruit__click" data-kind="position">
                                <div class="">채용공고</div>
                                <svg class="" viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="main5_container1">
                        <a class="" data-attribute-id="home__recruit__click" data-kind="position" href="/wdlist"><span class="SvgIcon_SvgIcon__root__8vwon"><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path></svg></span></a>
                        <div class="main5_container1_txt">
                            <button class="" data-attribute-id="home__recruit__click" data-kind="position">
                                <div class="">내 프로필</div>
                                <svg class="" viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="main5_container1">
                        <a class="" data-attribute-id="home__recruit__click" data-kind="position" href="/wdlist"><span class="SvgIcon_SvgIcon__root__8vwon"><svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path></svg></span></a>
                        <div class="main5_container1_txt">
                            <button class="" data-attribute-id="home__recruit__click" data-kind="position">
                                <div class="">매치업</div>
                                <svg class="" viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="main5_container1">
                        <a class="RecruitmentQuickMenu_RecruitmentQuickMenu__item__icon__oqlzc" data-attribute-id="home__recruit__click" data-kind="salary" href="/salary"><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z" fill="#333"></path></svg></a>
                        <div class="main5_container1_txt">
                            <button class="" data-attribute-id="home__recruit__click" data-kind="position">
                                <div class="">직군별 연봉</div>
                                <svg class="" viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <div className='footer'>
          <Footer></Footer>                     
      </div>
    </div>
  );
}

export default App;