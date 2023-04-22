import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCommends, getDatas } from '../moduls/moviePost';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
}

const Subboar_Free = () => {
    const {loading, data, error } = useSelector(state=> state.moviePost.commends);
    const dispatch = useDispatch();
    const subFree = async () => {
        const data = await axios.get(`${API_URL}/subFrees`)
        return data
    }
     
    useEffect(() => {
        dispatch(getCommends(subFree))
      }, [dispatch])
    if(loading) return <div style={{...mm}}>로딩중...</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    return (
        <div className='box'>
            <div className='head'>
                <h3>자유 게시판</h3>
                <nav>
                    <Link to='/free'>
                        <span className='plussp'>+</span>
                        <span>더보기</span>
                    </Link>
                </nav>
            </div>
            <ul> 
                {data.map(subf=><li key={subf.bor_no}>
                    <Link to={`/detailfree/${subf.bor_no}`}>{subf.bor_title}</Link></li>)}
            </ul>
        </div>
    );
};

export default Subboar_Free;