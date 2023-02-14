import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getCookie } from '../util/cookie';
import './WriteText.scss';

const WriteNotice = () => {
    let time = new Date()
    let year = time.getFullYear();
    let month = time.getMonth() +1;
    let date = time.getDate();
    let day = time.getDay();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    const navigate = useNavigate()
    const [isText, setText] = useState({
        n_title:"",
        n_desc: "",
        n_nickname: getCookie("usernickname"),
        n_date: `${year}-${month}-${date}`
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setText({
            ...isText,
            [name] : value
        })
        
    }

    const listbt = () => {
        navigate("/notice")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(isText.n_title !=="" && isText.n_desc !== "" ){
            WriteText();
        }
    }
    const WriteText = () => {
        console.log("호출")
        axios.post(`${API_URL}/notices`, isText)
        .then(res=> {
            console.log(res.data)
            alert('등록되었습니다.');
            navigate(`/notice`)
            
        })
        .catch(e=>{
            console.log(e); 
        })
    }

    return (
        <div className="Writing">
            <form onSubmit={onSubmit}>
                <h2>게시글 작성</h2>
                <div className='form-wrapper'>
                    <input className="title-input" name="n_title" type='text' 
                    placeholder='제목을 입력하세요' onChange={onChange} value={isText.n_title}/>
                    <input className='title-nick' name='n_nickname' type='text' 
                    placeholder='닉네임 입력' onChange={onChange} value={isText.n_nickname} />
                    <input className='title-date' name='n_date' type='text' placeholder='날짜' value={isText.n_date} onChange={onChange} /> 
                    <textarea className="text-area" name="n_desc" 
                    placeholder='내용을 입력하세요' onChange={onChange} value={isText.n_desc}></textarea>
                </div>
                <button className="submit-button" type="submit">등록</button>
                <button className="submit-button" type="reset" onClick={listbt}>취소</button>
            </form>
      </div>
    )
    }

export default WriteNotice;