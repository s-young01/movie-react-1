import React from 'react';
import './Login.scss';

const LoginPage = () => {
    return (
        <div className='inner'>
            <div className='login'>
                <div className='loginbox'>
                    <h2>로그인</h2>
                    <table className='login_table'>
                        <tbody>
                            <tr>
                                <td>
                                    <span>아이디</span>
                                </td>
                                <td>
                                    <input name='userid'/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>비밀번호</span>
                                </td>
                                <td>
                                    <input name='userpass'/>
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
                        <button>로그인</button>
                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;