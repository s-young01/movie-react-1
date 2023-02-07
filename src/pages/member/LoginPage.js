import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../config/apiurl';
import './Login.scss';

const LoginPage = () => { 
    const [loginData, setLoginData] = useState({
        id: "",
        password: "",
    })
    const onChange = (e) => {
        const {name , value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.id === '' || loginData.password === '') {
            alert('이메일과 비밀번호를 입력해주세요.')
        } else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                console.log(result)
                alert("로그인하였습니다.")
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }

    return (
        <div className='inner'>
            <div className='login'>
                <div className='loginbox'>
                    <h2>로그인</h2>
                    <form onSubmit={onSubmit}>
                    <table className='login_table'>
                        <tbody>
                            <tr>
                                <td>
                                    <span>아이디</span>
                                </td>
                                <td>
                                    <input name='id' type='text' value={loginData.id} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>비밀번호</span>
                                </td>
                                <td>
                                    <input name='password' type='password' value={loginData.password} onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className='find'>
                        <li>아이디 찾기</li>
                        <span>|</span>
                        <li>비밀번호 찾기</li>
                    </ul>
                    <div className='login_btn'>
                        <button type="submit">로그인</button>
                        <button>회원가입</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;