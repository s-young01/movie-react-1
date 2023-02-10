import React, { useState } from 'react';
import './DetailCommend.scss';
import { Pagination } from 'antd';
import { BiLike, BiDislike,BiCommentDetail, BiCommentEdit } from "react-icons/bi";

const DetailCommend = () => {
    // textarea 상태관리
    const [textCount, setTextCount] = useState(0);
    const ontextHandeler = (e) => {
        setTextCount(e.target.value.length);
    }
    return (
        <div className='commendbox'>
            <div className='titlezone'>
                <h3>영화 한줄평 <BiCommentDetail className='icon2'/></h3>
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
                            <th width='70%'>한줄평</th>
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
                <h3>한줄평 쓰기 <BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    <div className='write'>
                        <textarea maxLength={29} onChange={ontextHandeler}
                        placeholder='이 영화의 한줄평을 자유롭게 적어주세요.'></textarea>
                        <button>등록하기</button>
                    </div>
                    <div className='recomendzone'>
                        <nav>
                            <span>추천여부</span>
                            <BiLike className='icon'/>
                            <input name='recomend' type='radio' value='like'/>
                            <BiDislike className='icon'/>
                            <input name='recomend' type='radio' value='dislike'/>
                        </nav>
                        <p>
                            <span>{textCount}</span> 
                            <span>/</span> 
                            <span>30자</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default DetailCommend;