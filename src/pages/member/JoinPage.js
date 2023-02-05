import React from 'react';
import './Join.scss';

const JoinPage = () => {
    return (
        <div className='inner'>
            <div id='join'>
                <div className='joinbox'>
                    <h2>회원가입</h2>
                    <table className='member_table'>
                        <tbody>
                            <tr>
                                <td><span>아이디</span></td>
                                <td>
                                    <input name='m_id' type='text'/>
                                    <button className='id_btn'>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호</span></td>
                                <td>
                                    <input name='m_pass' type='text'/>
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호 확인</span></td>
                                <td>
                                    <input name='m_passch' type='text'/>
                                </td>
                            </tr>
                            <tr>
                                <td><span>닉네임</span></td>
                                <td>
                                    <input name='m_nickname' type='text'/>
                                </td>
                            </tr>
                            <tr>
                                <td><span>이메일</span></td>
                                <td>
                                    <input name='m_email' type='text'/>@ 
                                    <select>
                                        <option>google.com</option>
                                        <option>naver.com</option>
                                        <option>daum.net</option>
                                        <option>nate.com</option>
                                        <option>hanmail.com</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>생년월일</span></td>
                                <td>
                                    <input name='m_y' type='text'/>년
                                    <select>
                                        <option>1</option>                                        
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>월
                                    <input name='m_d' type='text'/>일
                                </td>
                            </tr>
                            <tr>
                                <td><span>성별</span></td>
                                <td>
                                    남 <input name='m_gender' type='radio' value='남' />
                                    여 <input name='m_gender' type='radio' value='여'/>
                                </td>
                                    
                            </tr>
                        </tbody>
                    </table>
                    <div className='join_btn'>
                        <button>가입하기</button>
                        <button>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;