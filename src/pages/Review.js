import axios from 'axios';
import { Pagination } from 'antd';
import React,{useState} from 'react';
import { useEffect } from 'react';
import { API_URL } from '../config/apiurl';
import ReviewList from './ReviewList';
import './Review.scss';

const Review = () => {
    const [listData, setListData] = useState([]);
    
    useEffect(()=>{
        axios.get(`${API_URL}/review`)
        .then(res =>{
            console.log(res);
            setListData(res.data);
        })
        .catch(e=>console.log(e));
    },[]);
    
    return (
        <div className="review_page inner">
            <h2>영화 리뷰</h2>
            {listData.map(list=><ReviewList list={list}/>)}
            <Pagination className='pagination'/>    
        </div>
    );
};


export default Review;