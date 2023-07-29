import React, { useState } from "react";
import ChaeCompanyBtnPrev from "./ChaeCompanyBtnPrev";
import ChaeCompanyBtnNext from "./ChaeCompanyBtnNext";
import data from "./ChaeCompany.json";

function ChaeCompanyGoTema() {
  const [articles, setArticles] = useState(data.companyIntro);
  const [text1, setText1] = useState(data.companyRecommand);

  return (
    <section>
      <article className="main4">
        <div className="main4card1">
          <div className="title00">
            <div className="main4SubTitle">
              <ChaeCompanyBtnPrev></ChaeCompanyBtnPrev>
              <div className="subTitletxt">
                <h2 className="subTitletxt1">{articles[2].title}</h2>
              </div>
              <ChaeCompanyBtnNext></ChaeCompanyBtnNext>
            </div>
          </div>
          <div className="subcard00">
            <div className="subcard1">
              <div className="subCard1_img00">
                <img
                  className="subCard1_tema_img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F265_94625298.png&amp;w=520&amp;q=100"
                  alt=""
                />
              </div>
              <div className="temaCard_bot">
                <div className="tema_txt00">
                  <div className="tema_txt">{text1[4].title}</div>
                  <div className="tema_txt2">{text1[4].title2}</div>
                </div>
              </div>
              <div className="tema_img">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.7dc54da0.jpg&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab18b5ff.png&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.a3889de2.png&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.40ff0c85.png&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.c8e0ee94.jpg&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.379b3c9c.png&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.a95bafdf.jpg&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.744b1b2a.jpg&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.0ad64c7d.png&amp;w=30&amp;q=70"
                  alt="최근 100억 투자 유치 기업 - 개발 포지션"
                />
                <span>+52</span>
              </div>
            </div>

            <div className="subcard2">
              <div className="subCard2_img00">
                <img
                  className="subCard1_tema_img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F263_3b52a645.png&amp;w=520&amp;q=100"
                  alt=""
                />
              </div>
              <div className="temaCard_bot">
                <div className="tema_txt00">
                  <div className="tema_txt3">{text1[5].title}</div>
                  <div className="tema_txt4">{text1[5].title2}</div>
                </div>
              </div>
              <div className="tema_img">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.0bffc021.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.a4ea7594.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.0ad64c7d.png&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.20ea32dc.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.9a528984.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.831571f7.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_c41f821c-9b00-4d0d-96bf-763ba5f6b800.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.c7b4f0a6.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.4fc1abf9.jpg&amp;w=30&amp;q=70"
                  alt="신입 적극 채용 기업"
                />
                <span>+143</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ChaeCompanyGoTema;