import React from 'react';
import ReviewList from './ReviewList';

const Review = () => {
    cosnt [listData, setListData] = useState([
        {
            mov_no: 1,
            mov_title: "제목1",
            mov_score: "평점1",
            mov_desc: "내용1"
        },
        {
            mov_no: 2,
            mov_title: "제목2",
            mov_score: "평점2",
            mov_desc: "내용2"
        },
        {
            mov_no: 3,
            mov_title: "제목3",
            mov_score: "평점3",
            mov_desc: "내용3"
        },
        {
            mov_no: 4,
            mov_title: "제목4",
            mov_score: "평점4",
            mov_desc: "내용4"
        },
        {
            mov_no: 5,
            mov_title: "제목5",
            mov_score: "평점5",
            mov_desc: "내용5"
        },
        
    ]);

    return (
        <div className="review_page">
            <h2>영화리뷰</h2>
            {listData.map(list=><ReviewList list={list}/>)}    
        </div>
    );
};


export default Review;