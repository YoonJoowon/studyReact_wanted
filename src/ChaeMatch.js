import React, { useState } from 'react';
import './App_chae.css';

function ChaeMatch() {

    return (
        <section>
            <div className="main2">
                <div className="match1">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none"></svg>
                    <img className="match1_img" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="170" alt="logo-wantedai"/>
                </div>

                <div className="match2">
                    <img aria-label="wantedai-logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="114" alt="logo-wantedai" />
                    가 제안하는 합격률 높은 포지션
                    <svg width="24" height="24" viewBox="0 0 17 17"><defs></defs><g fill="none" fillrule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                </div>

                <div className="match3">
                    <h3 className="match3_txt">회원가입하면 포지션을 추천해드려요.</h3>
                    <button type="button">지금 시작하기</button>
                </div>
            </div>
        </section>

    )
}

export default ChaeMatch;