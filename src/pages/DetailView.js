import React from 'react';
import { Link } from 'react-router-dom';
import './DetailView.scss';

const DetailView = () => {
    return (
            <div className="inner detailtext">
                <div className='detailtextbox'>
                    <div className='detailTitle'>
                        <h2>제목</h2>
                        <div>
                            <nav>
                                <span>작성자</span>
                                <span>:</span>
                                <span>권세영</span>
                            </nav>
                            <nav>
                                <span>조회수</span>
                                <span>:</span>
                                <span>5</span>
                            </nav>
                        </div>
                    </div>
                    <div className='textzone'>
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        <br/>
                        내용내용내
                        내용내용내용
                        내용내용내용
                        내용내용내용
                        내용내용내용내용내용내용
                    </div>
                    <div className='btn'>
                        <button className='btn1'><Link to='/free'>수정하기</Link></button>
                        <button className='btn2'><Link to='/free'>삭제하기</Link></button>
                    </div>    
                </div>
            </div>
           
    )
}

export default DetailView;