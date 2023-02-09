import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config/apiurl';
import { goToHome } from '../../moduls/loginCheck';
import './Join.scss';

// select / option 스타일
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        username:"",
        nicname: "",
        password: "",
        passwordch: "",
        year: "",
        month: "",
        day: "",
        email1: "",
        email2: "google.com",
        gender: ""
    })
    //초기값
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [nicname, setNicname] = useState("")
    const [password, setPassword] = useState("")
    const [passwordch, setPasswordch] = useState("")
    const [year, setYear] = useState("")
    const [day, setDay] = useState("")
    const [email1, setEmail1] = useState("")

    //오류메세지
    const [idMessage, setIdMessage] = useState("")
    const [nameMessage, setNameMessage] = useState("")
    const [nicnameMessage, setNicnameMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [passwordchMessage, setPasswordchMessage] = useState("")
    const [yearMessage, setYearMessage] = useState("")
    const [dayMessage, setDayMessage] = useState("")
    const [email1Message, setEmail1Message] = useState("")

    //유효 검사
    const [ isid, setisId] = useState("")
    const [isusername, setisUsername] = useState("")
    const [isnicname, setisNicname] = useState("")
    const [ispassword, setisPassword] = useState("")
    const [ispasswordch, setisPasswordch] = useState("")
    const [isyear, setisYear] = useState("")
    const [isday, setisDay] = useState("")
    const [isemail1, setisEmail1] = useState("")

    //중복확인 체크
    const [ischeck, setCheck] = useState({
        checkId: 0,
        checkNic: 0
    })
    


//유저이름
const onChangeName = (e) => {
    const currentName = e.target.value
    setUsername(currentName)
    setFormData({
        ...formData,
        username:currentName
    })
    const nameInput = /^[a-zA-Z가-힣]{3,10}$/

    if(!nameInput.test(currentName)) {
        setNameMessage("정확한 이름을 입력해주세요")
        setisUsername(false)
    }else {
        setNameMessage("감사합니다")
        setisUsername(true)
    }
}
//유저아이디
const onChangeid = (e) => {
    const currentId = e.target.value
    setId(currentId)
    setFormData({
        ...formData,
        id:currentId
    })
    const idInput = /^[a-zA-Z0-9]{4,12}$/

    if(!idInput.test(currentId)) {
        setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!")
        setisId(false)
    }else {
        setIdMessage("중복확인 해주세요.")
        setisId(true)
    }
}
//유저비밀번호
const onChangePass = (e) => {
    const currentPass = e.target.value
    setPassword(currentPass)
    setFormData({
        ...formData,
        password:currentPass
    })
    const passInput = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

    if(!passInput.test(currentPass)) {
        setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!")
        setisPassword(false)
    }else {
        setPasswordMessage("사용가능한 비밀번호입니다.")
        setisPassword(true)
    }
}
//유저비밀번호확인
const onChangePassch = (e) => {
    const currentPassch = e.target.value
    setPasswordch(currentPassch)
    setFormData({
        ...formData,
        passwordch:currentPassch
    })
    if(currentPassch !== formData.password) {
        setPasswordchMessage("비밀번호가 일치하지 않습니다")
        console.log(formData.password)
        setisPasswordch(false)
    }else {
        setPasswordchMessage("비밀번호가 일치합니다.")
        setisPasswordch(true)
    }
}

//유저닉네임
const onChangenic = (e) => {
    const currentnic = e.target.value
    setNicname(currentnic)
    setFormData({
        ...formData,
        nicname:currentnic
    })
    const nicnaInput = /^[a-zA-Z가-힣0-9]{2,10}$/

    if(!nicnaInput.test(currentnic)) {
        setNicnameMessage("닉네임은 2자~10자이하로 입력해주세요")
        setisNicname(false)
    }else {
        setNicnameMessage("중복확인해주세요")
        setisNicname(true)
    }
}
//이메일
const onChangeEma = (e) => {
    const currentEma = e.target.value
    setEmail1(currentEma)
    setFormData({
        ...formData,
        email1:currentEma
    })
    const emailInput = /^[a-zA-Z0-9]{2,30}$/

    if(!emailInput.test(currentEma)) {
        setEmail1Message("이메일 아이디를 입력해주세요")
        setisEmail1(false)
    }else {
        setEmail1Message("")
        setisEmail1(true)
    }
}
//이메일 주소
const onChangeEma2 = (e) => {
    const currentEma2 = e.target.value
    setFormData({
        ...formData,
        email2:currentEma2
    })
}

//년도
const onChangeYear = (e) => {
    const currentYear = e.target.value
    setYear(currentYear)
    setFormData({
        ...formData,
        year:currentYear
    })
    const yearInput = /^[0-9]{3,4}$/

    if(!yearInput.test(currentYear)) {
        setYearMessage("연도를 입력해주세요")
        setisYear(false)
    }else {
        setYearMessage("")
        setisYear(true)
    }
}
//생월
const onChangeMonth = (e) => {
    const currentMonth = e.target.value
    setFormData({
        ...formData,
        month:currentMonth
    })
}

//생일
const onChangeDay = (e) => {
    const currentDay = e.target.value
    setDay(currentDay)
    setFormData({
        ...formData,
        day:currentDay
    })
    const dayInput = /^[0-9]{1,2}$/

    if(!dayInput.test(currentDay)) {
        setDayMessage("일을 입력해주세요")
        setisDay(false)
    }else {
        setDayMessage("")
        setisDay(true)
    }
}

//성별
const onChangeGen = (e) => {
    const currentGen = e.target.value
    setFormData({
        ...formData,
        gender:currentGen
    })
}



//아이디 중복확인
const idCheck = ()=>{
    console.log("아이디 중복확인 시작")
    if(isid) {
        axios.post(`${API_URL}/idch`, {id:id})
        .then(res=>{
            console.log(res.data.id)
            if(res.data.id === id) {
                setIdMessage("아이디 중복입니다. 다른 아이디를 입력해주세요")
            } else{
                setIdMessage("사용가능한 아이디입니다")
                setCheck({
                    ...ischeck,
                    checkId:1,
                })
            }
        })
        .catch(e=>console.log(e))
    }else{
        alert("아이디를 입력해주세요")
    }
}

//닉네임 중복확인
const nicCheck = ()=>{
    console.log("닉네임 중복확인 시작")
    console.log(nicname)
    if(isnicname) {
        axios.post(`${API_URL}/nicname`, {nicname:nicname})
        .then(res=>{
            console.log(res.data.nicname)
            if(res.data.nicname === nicname) {
                setNicnameMessage("닉네임 중복입니다. 다른 닉네임 입력해주세요")
            } else{
                setNicnameMessage("사용가능한 닉네임입니다")
                setCheck({
                    ...ischeck,
                    checkNic:1,
                })
            }
        })
        .catch(e=>console.log(e))
    }else{
        alert("닉네임을 입력해주세요")
    }
}

//폼 전송 이벤트
const onSubmit = (e) => {
        e.preventDefault();
        //입력 다 되었는지 확인
        if(ischeck.checkId === 0 && ischeck.checkNic === 0){
              alert("아이디, 닉네임 중복확인 눌러주세요")
        }else if(formData.id !== "" && formData.username !== "" && formData.nicname !== "" && formData.password !== "" 
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
            setCheck({
                ...ischeck,
                checkId:0,
                checkNic:0
            })
            navigate('/login')
        })
        .catch(e=>{
            console.log('에러가 발생했습니다')
            console.log(e)
        })
    }
    const home = () => {
        dispatch(goToHome(navigate))
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
                                    <input name='username' type='text' value={username} onChange={onChangeName}/>
                                    <span>{nameMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>아이디</span></td>
                                <td>
                                    <input name='id' type='text' value={id} onChange={onChangeid}/>
                                    <button className='id_btn' onClick={idCheck}>중복확인</button>
                                    <span>{idMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호</span></td>
                                <td>
                                    <input name='password' type='password' value={password} onChange={onChangePass}/>
                                    <span>{passwordMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>비밀번호 확인</span></td>
                                <td>
                                    <input name='passwordch' type='password' value={passwordch} onChange={onChangePassch}/>
                                    <span>{passwordchMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>닉네임</span></td>
                                <td>
                                    <input name='nicname' type='text' value={nicname} onChange={onChangenic}/>
                                    <button className='id_btn' onClick={nicCheck}>중복확인</button>
                                    <span>{nicnameMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>이메일</span></td>
                                <td>
                                    <input name='email1' type='text' value={email1} onChange={onChangeEma}/>
                                    <Select name="email2" value={formData.email2} onChange={onChangeEma2}>
                                        <Option value="google.com" >@ google.com</Option>
                                        <Option value="naver.com">@ naver.com</Option>
                                        <Option value="daum.net">@ daum.net</Option>
                                        <Option value="nate.com">@ nate.com</Option>
                                        <Option value="hanmail.com">@ hanmail.com</Option>
                                    </Select>
                                    <span>{email1Message}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>생년월일</span></td>
                                <td>
                                    <input name='year' type='text' value={year} onChange={onChangeYear}/>
                                    
                                    <span className='sp'>년</span>
                                    <Select name="month" value={formData.month} onChange={onChangeMonth}>
                                        <Option>선택해주세요</Option> 
                                        <Option value="01" >01</Option>                                        
                                        <Option value="02" >02</Option>
                                        <Option value="03" >03</Option>
                                        <Option value="04" >04</Option>
                                        <Option value="05" >05</Option>
                                        <Option value="06" >06</Option>
                                        <Option value="07" >07</Option>
                                        <Option value="08" >08</Option>
                                        <Option value="09" >09</Option>
                                        <Option value="10" >10</Option>
                                        <Option value="11" >11</Option>
                                        <Option value="12" >12</Option>
                                    </Select>
                                    <span className='sp'>월</span>
                                    <input name='day' type='text'  className='dayinput' value={day} onChange={onChangeDay}/>
                                    <span className='sp'>일</span>
                                    <span>{yearMessage}</span>
                                    <span>{dayMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><span>성별</span></td>
                                <td>
                                    <span className='sp2'>남</span> 
                                    <input name='gender' type='radio' value="남" onChange={onChangeGen}/>
                                    <span className='sp2'>여</span>
                                    <input name='gender' type='radio' value="여" onChange={onChangeGen}/>
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                    <div className='join_btn'>
                        <button type="submit">가입하기</button>
                        <button onClick={home}>취소</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;