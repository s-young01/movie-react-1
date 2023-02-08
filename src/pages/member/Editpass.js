import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiurl';
import './Editpass.scss'

const Editpass = () => {
    const navigate = useNavigate();
    const userId = useSelector(state=>state.loginCheck.updataId);
    const [formData, setFormData] = useState({
        password:"",
        passwordch: "",
        email: userId,
    })
    const onChange = (e)=> {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.password === formData.passwordch) {
            axios.patch(`${API_URL}/editpass`, formData)
            .then(res=>{
                console.log(res)
                if(res.data){
                    alert('패스워드가 변경되었습니다');
                    navigate("/login")
                }
            })
            .catch(e=>console.log(e))
        }else {
            alert('비밀번호가 일치하지 않습니다')
        }
    }
    return (
        <div className='inner outline'>
            <div className='editpass'>
                <h2>비밀번호 변경하기</h2>
                <form className='enter' onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>비밀번호</td>
                                <td><input name="password" type="password" value={formData.password}
                                onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호 확인</td>
                                <td><input name="passwordch" type="password" value={formData.passwordch}
                                onChange={onChange}
                                /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}className='subtn'>
                                    <button type="submit">변경하기</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Editpass;