import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getReviews } from '../moduls/moviePost';

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
}

const Subboar_Review = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.reviewPosts);
    const dispatch = useDispatch();
    const subReview = async () => {
        const data = await axios.get(`${API_URL}/subrevs`);
        console.log(data);
        return data;
    }
    useEffect(() => {
        dispatch(getReviews(subReview));
    }, [dispatch]);
    if(loading) return <div style={{...mm}}>로딩중...</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    return (
        <div className='box'>
            <div className='head'>
                <h3>영화 리뷰</h3>
                <nav>
                    <Link to ='/test'>
                        <span className='plussp'>+</span>
                        <span>더보기</span>
                    </Link>
                </nav>
            </div>
            <ul>
                {data.map(subr=><li key={subr.r_no}>{subr.r_title}</li>)}
            </ul>
        </div>
    );
};

export default Subboar_Review;