import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getNotices } from '../moduls/moviePost';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
}

const Subboar_Notice = () => {
    const {loading, data, error } = useSelector(state=> state.moviePost.noticePosts);
    const dispatch = useDispatch();
    const subNotice = async () => {
        const data = await axios.get(`${API_URL}/subnotice`);
        return data;
    }
     
    useEffect(() => {
        dispatch(getNotices(subNotice))
      }, [dispatch])
    if(loading) return <div style={{...mm}}>로딩중...</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    return (
        <div className='box'>
            <div className='head'>
                <h3>공지사항</h3>
                <nav>
                    <Link to='/notice'>
                        <span className='plussp'>+</span>
                        <span>더보기</span>
                    </Link>
                </nav>
            </div>
            <ul>
                {data.map(subn=><li key={subn.not_no}>
                    <Link to={`/noticefree/${subn.not_no}`}>{subn.not_title}</Link></li>)}
            </ul>
        </div>
    );
};

export default Subboar_Notice;