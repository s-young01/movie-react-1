import React from 'react';
import { Link } from 'react-router-dom';
import './DetailView.scss';

const DetailView = () => {
    return (
            <div className="wrap">
                <div>
                    <h2>게시글 상세보기</h2>
                </div> 
                <hr/>
                <table className='detail'>
                    <tr>
                        <th>번호</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th>작성시간</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>조회수</th>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>5</td>
                    </tr>
                    <div className='btn'>
                        <button><Link to='/free'>글쓰기</Link></button>
                        <button><Link to='/free'>목록</Link></button>
                    </div>            
                </table>
            </div>
           
    )
}

export default DetailView;