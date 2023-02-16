import React, { useEffect } from 'react';
import './DetailCommend.scss';
import { Pagination } from 'antd';
import { BiLike, BiCommentDetail, BiCommentEdit } from "react-icons/bi";
import WriteCommend from '../pages/WriteCommend';
import { useDispatch, useSelector } from 'react-redux';
import { getCommends } from '../moduls/moviePost';
import axios from 'axios';
import { API_URL } from '../config/apiurl';

const DetailCommend = ({movno}) => {
    const onSign = () => {
        dispatch(getCommends(commendData));
    }
    const {loading, data, error} = useSelector(state => state.moviePost.commends);
    const dispatch = useDispatch();
    console.log(`여기에요 ${movno}`)
    const commendData = async () => {
        console.log('aaa');
        const data = await axios.get(`${API_URL}/detailcommend/${movno}`);
        console.log(data);
        return data;
    }   
    useEffect(() => {
        dispatch(getCommends(commendData));
    }, [dispatch,movno])
    
    if(loading) return <div>로딩중...</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    return (
        <div className='commendbox'>
            <div className='titlezone'>
                <h3>영화 한줄평 <BiCommentDetail className='icon2'/></h3>
                <nav>
                    <span className='infosp'>( 이 영화를 추천 하려면 아이콘을 누르세요 )</span>
                    <BiLike className='icon' /> : <span>0</span>
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
                        {data.length > 0  ? data.map(da => <tr key={da.c_no}>
                            <td>{da.c_name}</td>
                            <td>{da.c_desc}</td>
                        </tr>)
                        : <tr style={{height: '200px'}}>
                            <td colSpan={2}>작성된 한줄평이 없습니다..</td>
                        </tr>}
                    </tbody>
                </table>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className='writezone'>
                <h3>한줄평 쓰기 <BiCommentEdit className='icon2'/></h3>
                <div className='writebox'>
                    {/* textarea있는 컴포넌트 자리 ! */}
                    <WriteCommend movno={movno} onSign={onSign}/>
                </div>
            </div>
        </div>
    );
};

export default DetailCommend;