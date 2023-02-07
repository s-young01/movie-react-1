import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";

// div map 돌려서 뿌려줄 컴포넌트 만들기
function NewMovieList({list}) {
    return (
        <div className="NewMovie">
            <Link to={`/latest/${list.mov_no}`}>
                <div className="NewMovie_img_div">
                    <img src={`${API_URL}/${list.mov_img}`} alt='' className="NewMovie_img"/>
                </div>
                <div className="NewMovie_desc">
                    <h4 className="NewMovie_title">{list.mov_title}</h4>
                    <div className="NewMovie_score">평점 10.0</div>
                </div>
            </Link>
        </div>
    );
}

const NewMoviePage = ({data}) => {
    return (
        <div className="NewMovie_page">
            <h2>최신영화 - 현재 상영작</h2>
            <div className="NewMovie_box">
                {data.map(d => <NewMovieList key={d.mov_no} list={d}/>)}
            </div>
        </div>
    );
};

export default NewMoviePage;