import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import { setId } from '../../moduls/loginCheck';
import "./FindPass.scss"


const FindPass = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [idInfo, setidInfo] = useState("")
    const [formData, setFormData] = useState({
        username:"",
        userid:"",
        useremail:"",
    })
    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`${API_URL}/findPass`, formData)
        .then(res=>{
            console.log(res.data)
            setidInfo(res.data)
            dispatch(setId(res.data))
        })
        .catch(e=>console.log(e))
    }
    const home = ()=>{
        navigate("/login")
    }

    
    return (
        <div className='inner outline'>
            <div className='findpass'>
                <h2>비밀번호 찾기</h2>
                {idInfo ? <div>비밀번호를 변경할 수 있습니다<Link to="/editpass">
                    <button className='logch'>비밀번호 변경하기</button></Link></div>:
                <form className='enter' onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td><input name="username" type="text" value={formData.username}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td><input name="userid" type="text" value={formData.userid}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input name="useremail" type="text" value={formData.useremail}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}className='subtn'>
                                    <button type="submit">확인</button>
                                    <button onClick={home}>취소</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>} 
            </div>
        </div>
    );
};

export default FindPass;