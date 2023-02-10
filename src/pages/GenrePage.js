import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import "./NewMoviePage.scss";
import "./GenrePage.scss"

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
    //console.log(data)
    const [isGenre, setGenre] = useState({
        genrelist: [
        {id: 1, genrelist:"전체", isDone: false},
        {id: 2, genrelist:"액션", isDone: false},
        {id: 3, genrelist:"호러/공포", isDone: false},
        {id: 4, genrelist:"애니메이션", isDone: false},
        {id: 5, genrelist:"스릴러/미스테리", isDone: false},
        {id: 6, genrelist:"어드벤쳐", isDone: false},
        {id: 7, genrelist:"판타지/다크판타지/슈퍼히어로/SF", isDone: false},
        {id: 8, genrelist:"뮤지컬/음악", isDone: false},
        {id: 9, genrelist:"시대극/전기", isDone: false},
        {id: 10, genrelist:"멜로/로멘스/드라마/가족/스포츠", isDone: false},
        {id: 11, genrelist:"코미디/블랙 코미디", isDone: false},
        {id: 12, genrelist:"범죄/느와르", isDone: false},
        {id: 13, genrelist:"전쟁/밀리터리", isDone: false},
        {id: 14, genrelist:"재난/포스트 아포칼립스", isDone: false}
    ]
})

    const onToggle = (id) => {
        const newlist = isGenre.genrelist.map(gen=>gen.id == id ? {
            ...gen,
            isDone: !gen.isDone
        }: gen.id != id && gen.isDone == true ? {
            ...gen,
            isDone: !gen.isDone 
        }: gen)
        console.log(newlist)
        setGenre({
            ...isGenre,
            genrelist : newlist
        });
    }
    return (
        <div className="NewMovie_page">
            <h2>장르영화</h2>
            <ul className='genreUl'>
                {isGenre.genrelist.map(gen=><li key={gen.id} value style={{fontWeight: gen.isDone ? "bold" :"normal" }}>
                    <span onClick={()=>{onToggle(gen.id)}}>{gen.genrelist}</span></li>)}
            </ul>
            <div className="NewMovie_box">
                {data.map(d => <NewMovieList key={d.mov_no} list={d}/>)}
            </div>
        </div>
    );
};

export default GenrePage;