import React, { useState } from 'react';
import './DetailCommend.scss';
import { Pagination } from 'antd';
import { BiLike, BiDislike,BiCommentDetail, BiCommentEdit } from "react-icons/bi";

const DetailCommend = () => {
    // input / textarea 상태관리
    const [inputCount, setInputCount] = useState(0);
    const oninputHandeler = (e) => {
        setInputCount(e.target.value.length);
    }
    const [textCount, setTextCount] = useState(0);
    const ontextHandeler = (e) => {
        setTextCount(e.target.value.length);
    }
    return (
        <div className='commendbox'>
            <div className='titlezone'>
                <h3>영화 리뷰<BiCommentDetail className='icon2'/></h3>
                <nav>
                    <BiLike className='icon'/> : <span>10</span>
                    <BiDislike className='icon'/> : <span>3</span>
                </nav>
            </div>
            <div className='commendzone'>
                <table className='commendtable'>
                    <thead>
                        <tr>
                            <th width='30%'>작성자</th>
                            <th width='70%'>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                        <tr>
                            <td>권세영</td>
                            <td>이 영화 너무 재밌네요 ~ ^^</td>
                        </tr>
                    </tbody>
                </table>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className='writezone'>
                <h3>리뷰 쓰기<BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    <span>제목</span>
                    <input maxLength={50} onChange={oninputHandeler}/>
                    <p>
                        <span>{inputCount}</span>/ 50자
                    </p>
                    <span>내용</span>
                    <textarea maxLength={500} onChange={ontextHandeler}/>
                    <p>
                        <span>{textCount}</span>/ 500자
                    </p>
                    <button>등록</button>
                </div>
                
            </div>
        </div>
    );
};

export default DetailCommend;