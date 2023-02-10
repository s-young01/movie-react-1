import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../moduls/moviePost';
import MonthRecoPage from '../pages/subpages/MonthRecoPage';

const MonthRecoContainer = () => {
    const {loading, data, error} = useSelector(state => state.moviePost.moviePosts);
    const getMonthData = async () => {
        const data = await axios.get(`${API_URL}/monthreco`);
        return data;
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas(getMonthData));
    }, [dispatch]);
    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    return (
        <MonthRecoPage data={data}/>
    );
};

export default MonthRecoContainer;