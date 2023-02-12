import React, { useState } from 'react';
import './DetailCommend.scss';
import { Pagination } from 'antd';
import { BiLike, BiDislike,BiCommentDetail, BiCommentEdit } from "react-icons/bi";
import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';

const DetailCommend = () => {
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const navigate = useNavigate();
    // 한줄평 상태관리
    const [inputText, setInputText] = useState('');
    const [commList, setCommList] = useState([]);
     // textarea 글자 수 상태관리
    const [textCount, setTextCount] = useState(0);
    // 등록하기 버튼 눌렀을 때
    const onClick = () => {
        const username = getCookie('usernickname');
        if(!isLogin) {
            removeCookie('usernickname');
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }else {
            const newList = [
                ...commList,
                {
                    id: commList.length + 1,
                    user: username,
                    text: inputText
                }
            ]
            setCommList(newList);
            setInputText('');
            setTextCount(0);
            console.log(typeof commList);
        }
    }
   
    const onChange = (e) => {
        setInputText(e.target.value);
        setTextCount(e.target.value.length);
    }
    return (
        <div className='commendbox'>
            <div className='titlezone'>
                <h3>영화 한줄평 <BiCommentDetail className='icon2'/></h3>
                <nav>
                    <BiLike className='icon' /> : <span>0</span>
                    <BiDislike className='icon' /> : <span>0</span>
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
                        {/* 진짜 모르겠다 뭘 어떻게 하면 이 친구가 나올까 하 .... */}
                        {commList ? <tr style={{height: '200px'}}>
                            <td colSpan={2}>작성된 한줄평이 없습니다..</td>
                        </tr>
                        : commList.map(li => <tr key={li.id}>
                            <td>{li.user}</td>
                            <td>{li.text}</td>
                        </tr>)}
                    </tbody>
                </table>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className='writezone'>
                <h3>한줄평 쓰기 <BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    <div className='write'>
                        <textarea maxLength={50} onChange={onChange} value={inputText} 
                        placeholder='이 영화의 한줄평을 자유롭게 적어주세요.'></textarea>
                        <button onClick={onClick}>등록하기</button>
                    </div>
                    <p>
                        <nav>
                            <span className='countsp'>{textCount}</span>
                            <span>/</span>
                            <span>50</span>
                        </nav>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailCommend;