import React from 'react';
import { Link} from 'react-router-dom';
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

const SearchPage = ({data}) => {
    console.log(data);
    return (
        <div className='inner'>
            <div className="NewMovie_page">
                <h2>검색한 결과...({data.length})건</h2>
                {data.length > 0 ?  
                    <div className="NewMovie_box">
                        {data.map(da => <NewMovieList key={da.mov_no} list={da}/>)}
                    </div>
                :
                    <div className="NewMovie_box2">
                        <p>검색 결과가 없습니다.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchPage;