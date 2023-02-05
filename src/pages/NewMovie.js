import React from 'react';
import ReactPlayer from 'react-player/lazy';

import styled from 'styled-components';
import "./NewMovie.scss"

const Imgs = styled.div`
        background-image: linear-gradient(
            to right,
            rgba(0,0,0,0) 10%,
            rgba(0,0,0,0.2) 25%,
            rgba(0,0,0,0.5) 50%,
            rgba(0,0,0,0.75) 75%,
            rgba(0,0,0,1) 100%), 
            url('images/quantumania.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left center;
            width: 100%;
            height: 100vh;`;
     

const NewMovie = () => {
    return (
        <div id="newMovie">
            <div id="youtubeText">
                <div className="movieText">
                    <h2>앤트맨 퀀텀매니아</h2>
                    <p>슈퍼히어로 파트너인 '스콧 랭'과 '호프 반 다인',
                        호프의 부모 '재닛 반 다인'과 '행크 핌',
                        그리고 스콧의 딸 '캐시 랭'까지
                        미지의 ‘양자 영역’ 세계 속에 빠져버린 ‘앤트맨 패밀리’.

                        그 곳에서 새로운 존재들과 무한한 우주를 다스리는 정복자 '캉'을 만나며,
                        그 누구도 예상 못 한 모든 것의 한계를 뛰어넘는 모험을 시작하게 되는데…</p>
                </div>
                <ReactPlayer  className="youtube"
                    url={"https://youtu.be/33Ljhqgdtsc"}
                    width="600px"
                    heigh="400px"
                    muted={true}
                    playing={true}
                    loop={true}
                    controls={true}
                    /* volume= {0.2}
                    pip={true} */
                />
            </div>
            <div id="bgm">
                <Imgs/>
            </div>
        </div>
    );
};

export default NewMovie;