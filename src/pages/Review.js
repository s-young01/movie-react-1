import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import { API_URL } from '../config/apiurl';
import ReviewList from './ReviewList';
import './Review.scss';
const Review = () => {
    const [listData, setListData] = useState([
        {
            r_no: 1,
            r_title: "제목1",
            r_nickname: "평점1",
            r_desc: "내용1"
        },
        {
            r_no: 2,
            r_title: "제목2",
            r_nickname: "평점2",
            r_desc: "내용2"
        },
        {
            r_no: 3,
            r_title: "제목3",
            r_nickname: "평점1",
            r_desc: "내용1"
        },
        {
            r_no: 4,
            r_title: "제목4",
            r_nickname: "평점1",
            r_desc: "내용1"
        },
        {
            r_no: 5,
            r_title: "제목5",
            r_nickname: "평점1",
            r_desc: "내용1"
        },
    ]);
    
    useEffect(()=>{
        axios.get(`${API_URL}/review`)
        .then(res=>{
            console.log(res)
            setListData(res.data)
        })
        .catch(e=>console.log(e));
    },[])
    
    return (
        <div className="review_page inner">
            <h2>영화 리뷰</h2>
            {listData.map(list=><ReviewList list={list}/>)}    
        </div>
    );
};


export default Review;