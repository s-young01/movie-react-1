import axios from 'axios';
import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './WriteText.scss';


const EditNotice = () => {
    const {no, title, name, desc, date} = useParams();
    console.log(no)
    console.log(title)
    console.log(name)
    console.log(desc)
    console.log(date)

    const navigate = useNavigate();

    const listbt = () => {
        navigate("/notice")
    }
    

    const [formData, setFormData] = useState({
        n_title: `${title}`,
        n_nickname: `${name}`,
        n_date: `${date}`,
        n_desc: `${desc}`,
        n_no: `${no}`
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
        if(formData.n_title !=="" && formData.n_desc !== "" ) {
            axios.patch(`${API_URL}/editNotice`, formData)
            .then(res=>{
                console.log(res)
                if(res){
                    alert('수정완료');
                    navigate("/notice")
                }
            })
            .catch(e=>console.log(e));
        }else {
            alert("제목과 내용을 입력해주세요.");
        }
    }
   
    return (
        <div className="Writing">
            <div className='inner'>
                <h2>게시글 수정</h2>
                <div className='form-wrapper'>
                    <form onSubmit={onSubmit}>
                        <input className="title-input" name="n_title" type='text' placeholder='제목을 입력하세요.'
                        onChange={onChange} value={formData.n_title}/>
                        <textarea className="text-area" name="n_desc" placeholder='내용을 입력하세요.'
                        onChange={onChange} value={formData.n_desc}></textarea>
                        <nav className='form_btn'>
                            <button className="submit_btn" type="submit">수정</button>
                            <button className="submit_btn" type="reset" onClick={listbt}>취소</button>
                        </nav>
                    </form>
                </div>  
            </div>
      </div>
    );
};

export default EditNotice;