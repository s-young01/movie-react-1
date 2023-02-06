import React from 'react';

const ReviewList = ({list}) => {
    return (
        <div>
            <img src="images/poster2_1.jpg" alt=''/>
            <h4>{list.title}<span>평점</span></h4>
            <p>{list.desc}</p>
        </div>
    );
};

export default ReviewList;