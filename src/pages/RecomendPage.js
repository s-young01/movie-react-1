import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";

function RecomendMovieList({list}) {
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
            <Link to ={`/recomend/${list.mov_no}`}>
                <div className="NewMovie_img_div">
                    <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
                </div>
                <div className='NewMovie_desc' style={{...ff}}>
                    <h4 className="NewMovie_title" style={{...ww}}>{list.mov_title}</h4>
                    <div style={{...ss}}>
                        <p style={{...jj}}>{list.mov_desc}</p>
                    </div>
                    <div className="NewMovie_score" style={{...ll}}>평점 {list.mov_score}</div>
                </div>
            </Link>
        </div>
    )
}
const RecomendPage = ({data}) => {
    return (
        <div className="NewMovie_page">
            <h2>추천영화 - 전체보기</h2>
            <div className="NewMovie_box">
                {data.map(d => <RecomendMovieList key={d.mov_no} list={d}/>)}
            </div>
        </div>
    );
};

export default RecomendPage;