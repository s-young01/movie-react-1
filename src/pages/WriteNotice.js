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
            <div className='inner'>
                <h2>게시글 작성</h2>
                <div className='form-wrapper'>
                    <form onSubmit={onSubmit}>
                        <input className="title-input" name="t_title" type='text' placeholder='제목을 입력하세요.'
                        onChange={onChange} value={isText.n_title}/>
                        <textarea className="text-area" name="t_desc" placeholder='내용을 입력하세요.'
                        onChange={onChange} value={isText.n_desc}></textarea>
                        <nav className='form_btn'>
                            <button className="submit_btn" type="submit">등록</button>
                            <button className="submit_btn" type="reset" onClick={listbt}>취소</button>
                        </nav>
                    </form>
                </div>  
            </div>
      </div>
    )
    }

export default WriteNotice;