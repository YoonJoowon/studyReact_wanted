import React, { useState } from 'react';
import './App.css';

function Carrer_(){
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
      
    return(
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
    )
}

export default Carrer_;