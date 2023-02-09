import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";

// div map 돌려서 뿌려줄 컴포넌트 만들기
function NewMovieList({list}) {
    const ss = {
        overflow: "hidden",
        height: "100px"
    }
    const jj ={
        lineHeight: "20px"
    }
    const ll = {
        marginTop: "20px"
    }
    const ff = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const ww ={
        height: "50px"
    }
    return (
        <div className="NewMovie">
            <Link to={`/detail/${list.mov_no}`}>
                <div className="NewMovie_img_div">
                    <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
                </div>
                <div className="NewMovie_desc" style={{...ff}}>
                    <h4 className="NewMovie_title" style={{...ww}}>{list.mov_title}</h4>
                    <div style={{...ss}}>
                        <p style={{...jj}}>{list.mov_desc}</p>
                    </div>
                    <div className="NewMovie_score" style={{...ll}}>평점 {list.mov_score}</div>
                </div>
            </Link>
        </div>
    );
}

const GenrePage = ({data}) => {
    console.log(data)
    return (
        <div className="NewMovie_page">
            <h2>장르영화</h2>
            <ul>
                <li>액션</li>
                <li>호러</li>
                <li>애니메이션</li>
                <li>스포츠</li>
                <li>드라마</li>
                <li>스릴러</li>
                <li>어드벤쳐</li>
                <li>SF</li>
                <li>다큐멘터리</li>
                <li>환타지</li>
                <li>느와르</li>
                <li>뮤지컬</li>
                <li>시대극</li>
                <li>멜로</li>
                <li>로멘스</li>
                <li>슈퍼히어로</li>
                <li>밀리터리</li>
                <li>전쟁</li>
                <li>가족</li>
                <li>블랙 코미디</li>
                <li>재난</li>
                <li>전기</li>
                <li>포스트 아포칼립스</li>
                <li>다크판타지</li>
                <li>음악</li>
                <li>공포</li>
                <li>미스테리</li>
            </ul>
            <div className="NewMovie_box">
                {data.map(d => <NewMovieList key={d.mov_no} list={d}/>)}
            </div>
        </div>
    );
};

export default GenrePage;