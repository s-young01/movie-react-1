import axios from 'axios';
import React, {useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import './WriteText.scss';


const EditDetailView = () => {
    const {no, title, name, desc, date} = useParams();
    console.log(no)
    console.log(title)
    console.log(name)
    console.log(desc)
    console.log(date)

    const navigate = useNavigate();

    const listbt = () => {
        navigate("/free")
    }
    

    const [formData, setFormData] = useState({
        t_title: `${title}`,
        t_nickname: `${name}`,
        t_date: `${date}`,
        t_desc: `${desc}`,
        t_no: `${no}`
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
        if(formData.t_title !=="" && formData.t_desc !== "" ) {
            axios.patch(`${API_URL}/editFree`, formData)
            .then(res=>{
                console.log(res)
                if(res){
                    alert('수정완료');
                    navigate("/free")
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
                        <input className="title-input" name="t_title" type='text' placeholder='제목을 입력하세요.'
                        onChange={onChange} value={formData.t_title}/>
                        <textarea className="text-area" name="t_desc" placeholder='내용을 입력하세요.'
                        onChange={onChange} value={formData.t_desc}></textarea>
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

export default EditDetailView;