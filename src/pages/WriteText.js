import React from 'react';
import { Link } from 'react-router-dom';
import './WriteText.scss';

const WriteText = () => {
    return (
        <div className="Writing">
            <h2>게시글 작성</h2>
            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목을 입력하세요' />
                <textarea className="text-area" placeholder='내용을 입력하세요'></textarea>
            </div>
            <button className="submit-button"><Link to='/free'>입력</Link></button>
      </div>
    )
};

export default WriteText;