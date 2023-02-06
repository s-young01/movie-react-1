import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config/apiurl';
import './Join.scss';

<<<<<<< Updated upstream


=======
// select / option 스타일
>>>>>>> Stashed changes
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
    transition: 0.2s;
`;
const Option = styled.option`
    background: #eee;
    color: #082032;
    padding: 3px 0;
`;

const JoinPage = () => {
    const [formData, setFormData] = useState({
        id: "",
        nicname: "",
        password: "",
        passwordch: "",
        year: "",
        month: "",
        day: "",
        email1: "",
        email2: "",
        gender: ""
    })

const onChange = (e) => {
    const {name, value} = e.target
    console.log(value)
    setFormData({
        ...formData,
        [name] : value
    })
}
//폼 전송 이벤트
const onSubmit = (e) => {
        e.preventDefault();
        //입력 다 되었는지 확인
        if(formData.id !== "" && formData.nicname !== "" && formData.password !== "" 
        && formData.year !== "" && formData.month !== "" && formData.day !== "" 
        && formData.email1 !== "" && formData.email2 !== "" && formData.gender !== "" ){
            addMenger()
        }
    }
    const addMenger = () => {
        console.log("호출")
        axios.post(`${API_URL}/join`, formData)
        .then(res=>{
            console.log("등록완료")
            alert('등록이되었습니다.')
        })
        .catch(e=>{
            console.log('에러가 발생했습니다')
            console.log(e)
        })
    }
    return (
        <div className='inner'>
            <div id='join'>
                <div className='joinbox'>
                    <h2>회원가입</h2>
                    <form onSubmit={onSubmit}>
                    <table className='member_table'>
                        <tbody>
                            <tr>
                                <td><span>이름</span></td>
                                <td>
                                    <input name='name' type='text'/>
                                </td>
                            </tr>
                            <tr>
                                <td><span>아이디</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='id' type='text' value={formData.id} onChange={onChange}/>
=======
                                    <input name='id' type='text'/>
>>>>>>> Stashed changes
                                    <button className='id_btn'>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='password' type='password' value={formData.password} onChange={onChange}/>
=======
                                    <input name='pass' type='password'/>
>>>>>>> Stashed changes
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호 확인</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='passwordch' type='password' value={formData.passwordch} onChange={onChange}/>
=======
                                    <input name='passch' type='password'/>
>>>>>>> Stashed changes
                                </td>
                            </tr>
                            <tr>
                                <td><span>닉네임</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='nicname' type='text' value={formData.nicname} onChange={onChange}/>
=======
                                    <input name='nickname' type='text'/>
                                    <button className='id_btn'>중복확인</button>
>>>>>>> Stashed changes
                                </td>
                            </tr>
                            <tr>
                                <td><span>이메일</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='email1' type='text' onChange={onChange}/>
                                    <span className='sp'>@</span>
                                    <Select name="email2" onChange={onChange}>
                                        <Option value="google.com" >google.com</Option>
                                        <Option value="naver.com">naver.com</Option>
                                        <Option value="daum.net">daum.net</Option>
                                        <Option value="nate.com">nate.com</Option>
                                        <Option value="hanmail.com">hanmail.com</Option>
=======
                                    <input name='email' type='text'/>
                                    <Select>
                                        <Option>선택해주세요.</Option>
                                        <Option>@ google.com</Option>
                                        <Option>@ naver.com</Option>
                                        <Option>@ daum.net</Option>
                                        <Option>@ nate.com</Option>
                                        <Option>@ hanmail.com</Option>
>>>>>>> Stashed changes
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>생년월일</span></td>
                                <td>
<<<<<<< Updated upstream
                                    <input name='year' type='text' value={formData.year} onChange={onChange}/>
                                    <span className='sp'>년</span>
                                    <Select name="month" onChange={onChange}>
                                        <Option value="1" >1</Option>                                        
                                        <Option value="2" >2</Option>
                                        <Option value="3" >3</Option>
                                        <Option value="4" >4</Option>
                                        <Option value="5" >5</Option>
                                        <Option value="6" >6</Option>
                                        <Option value="7" >7</Option>
                                        <Option value="8" >8</Option>
                                        <Option value="9" >9</Option>
                                        <Option value="10" >10</Option>
                                        <Option value="11" >11</Option>
                                        <Option value="12" >12</Option>
                                    </Select>
                                    <span className='sp'>월</span>
                                    <input name='day' type='text' value={formData.day} onChange={onChange}/>
=======
                                    <input name='year' type='text'/>
                                    <span className='sp'>년</span>
                                    <Select name='month'>
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
                                    <input name='day' type='text' className='dayinput'/>
>>>>>>> Stashed changes
                                    <span className='sp'>일</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>성별</span></td>
                                <td>
                                    <span className='sp2'>남</span> 
<<<<<<< Updated upstream
                                    <input name='gender' type='radio' value="남" onChange={onChange}/>
                                    <span className='sp2'>여</span>
                                    <input name='gender' type='radio' value="여" onChange={onChange}/>
                                </td>   
=======
                                    <input name='gender' type='radio' value='남' checked/>
                                    <span className='sp2'>여</span>
                                    <input name='gender' type='radio' value='여'/>
                                </td>
                                    
>>>>>>> Stashed changes
                            </tr>
                        </tbody>
                    </table>
                    <div className='join_btn'>
                        <button type="submit">가입하기</button>
                        <button>취소</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;