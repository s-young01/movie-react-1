import React from 'react';
import styled from 'styled-components';
import './Join.scss';

const Select = styled.select`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('/images/select_arrow.png') calc(100% - 1px) center no-repeat;
    background-size: 20px;
    padding: 4px 30px 4px 10px;
    border-radius: 4px;
    outline: 0 none;
`;
const Option = styled.option`
    background: #eee;
    color: #082032;
    padding: 3px 0;
`;

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
                                    <input name='m_email' type='text'/>
                                    <span className='sp'>@</span>
                                    <Select>
                                        <Option>google.com</Option>
                                        <Option>naver.com</Option>
                                        <Option>daum.net</Option>
                                        <Option>nate.com</Option>
                                        <Option>hanmail.com</Option>
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>생년월일</span></td>
                                <td>
                                    <input name='m_y' type='text'/>
                                    <span className='sp'>년</span>
                                    <Select>
                                        <Option>1</Option>                                        
                                        <Option>2</Option>
                                        <Option>3</Option>
                                        <Option>4</Option>
                                        <Option>5</Option>
                                        <Option>6</Option>
                                        <Option>7</Option>
                                        <Option>8</Option>
                                        <Option>9</Option>
                                        <Option>10</Option>
                                        <Option>11</Option>
                                        <Option>12</Option>
                                    </Select>
                                    <span className='sp'>월</span>
                                    <input name='m_d' type='text'/>
                                    <span className='sp'>일</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>성별</span></td>
                                <td>
                                    <span className='sp2'>남</span> 
                                    <input name='m_gender' type='radio' value='남' />
                                    <span className='sp2'>여</span>
                                    <input name='m_gender' type='radio' value='여'/>
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