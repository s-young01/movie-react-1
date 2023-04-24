import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import './WriteMovie.scss';

const WriteMovie = () => {
    const navigate = useNavigate();
    const isLogin = useSelector(state => state.loginCheck.isLogin);
    const username = getCookie('usernickname');
    const [formData, setFormData] = useState({
        mov_title: '',
        mov_genre: '',
        mov_limit: '',
        mov_date: '',
        mov_runnigtime: '',
        mov_actor: '',
        mov_director: '',
        mov_country: '',
        mov_score: '',
        mov_desc: '',
        mov_img: '',
        mov_movelink: '',
        mov_reco: null,
    });
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    // input의 type이 file인 input이 onChange 됐을 때
    // 변경된 파일을 서버로 업로드 전송하기
    const onChangeImg = (e) => {
        const {name} = e.target;
        // 폼 태그 생성하기
        const imgFormData = new FormData();
        // 폼 태그 데이터 추가하기
        imgFormData.append('file', e.target.files[0]);
        // 전송하기 
        axios.post(`${API_URL}/upload`, imgFormData, {
            headers: {'Content-Type' : 'multipart/formdata'}
        })
        .then(res => {
            setFormData({
                ...formData,
                [name]: res.data.imgUrl
            });
        })
        .catch(e => {
            console.log(e);
        })
    }
    // 폼 전송
    const onSubmit = (e) => {
        e.preventDefault();
        addMovie();
    }
    const addMovie = () => {
        axios.post(`${API_URL}/recomend`, formData)
        .then(res => {
            alert('등록완료');
            navigate('/recomend');
        })
        .catch(e => console.log(e))
    }
    useEffect(() => {
        if(!isLogin || username !== 'admin') {
            alert('관리자만 접근할 수 있습니다.');
            navigate('/');
        }
    }, [isLogin, username, navigate])
    return (
        <div className='inner2 writemovie'>
            <h2>영화등록</h2>
            <div className='writemoviebox'>
                <form onSubmit={onSubmit}>
                    <table className='writemovietable'>
                        <tbody>
                            <tr>
                                <th width="10%">제목</th>
                                <td>
                                    <input type='text' name='mov_title'
                                    value={formData.mov_title} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>장르</th>
                                <td>
                                    <input type='text' name='mov_genre'
                                    value={formData.mov_genre} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>연령제한</th>
                                <td>
                                    <input type='text' name='mov_limit'
                                    value={formData.mov_limit} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>개봉일</th>
                                <td>
                                    <input type='text' name='mov_date'
                                    value={formData.mov_date} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>상영시간</th>
                                <td>
                                    <input type='text' name='mov_runnigtime'
                                    value={formData.mov_runnigtime} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>출연배우</th>
                                <td>
                                    <input type='text' name='mov_actor'
                                    value={formData.mov_actor} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>감독</th>
                                <td>
                                    <input type='text' name='mov_director'
                                    value={formData.mov_director} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>개봉나라</th>
                                <td>
                                    <input type='text' name='mov_country'
                                    value={formData.mov_country} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>평점</th>
                                <td>
                                    <input type='text' name='mov_score'
                                    value={formData.mov_score} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>줄거리</th>
                                <td>
                                    <textarea type='text' name='mov_desc'
                                    value={formData.mov_desc} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>포스터</th>
                                <td>
                                    <input className='poster' type='file' name='mov_img'
                                    onChange={onChangeImg}/>
                                    {formData.mov_img && <div>
                                        <img src={`${API_URL}/upload/poster/${formData.mov_img}`}
                                        width='100px' alt=''/>    
                                    </div>}
                                </td>
                            </tr>
                            <tr>
                                <th>예고편 링크</th>
                                <td>
                                    <input type='text' name='mov_movelink'
                                    value={formData.mov_movelink} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th>추천 여부</th>
                                <td>
                                <select name='mov_reco' value={formData.mov_reco} onChange={onChange}>
                                    <option></option>
                                    <option value='추천'>추천</option>
                                </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav className='movie_submit'>
                        <button>등록하기</button>
                        <button>취소</button>
                    </nav>
                </form>
            </div>
        </div>
    );
};

export default WriteMovie;