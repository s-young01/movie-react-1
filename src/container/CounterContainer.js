import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getCount } from '../moduls/recoCount';
import RecoCount from '../pages/RecoCount';

const CounterContainer = ({movno}) => {
    const { loading, data, error} = useSelector(state => state.recoCount);
    const dispatch = useDispatch();
    const countData = async () => {
        const data = await axios.get(`${API_URL}/recocount/${movno}`);
        return data;
    }
    useEffect(() => {
        dispatch(getCount(countData));
    },[dispatch, movno]);
    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    return (
        <RecoCount movno={movno} data={data}/>
    );
};

export default CounterContainer;