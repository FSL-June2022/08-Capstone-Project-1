import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateMeeting.css'

const UpdateMeeting = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(params)
        getMeetingDetails();
    },[])//[] dependency ke bina output nahi edit nahi kar para tha mai

    const getMeetingDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/meeting/${params.id}`, {
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
              }
        });
        result = await result.json();
        // console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const updateMeeting = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/meeting/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json',
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }


  return (
    <>
    <div className='updateMeeting1'>
    <br />
    <label>Update Name : </label>
    <input className='inputBox' type="text" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder = " Enter Name"/>
        <br />
    <label>Update Price : </label>
    <input className='inputBox' type="number" value={price} onChange={(e)=> {setPrice(e.target.value)}} placeholder = " Enter price"/>
        <br />

    <label>Update Category : </label>
    <input className='inputBox' type="text"  value={category} onChange={(e) => {setCategory(e.target.value)}} placeholder = " Enter the category "/>
        <br />

    <label>Update company name : </label>
    <input className='inputBox' type="text"  value={company} onChange={(e) => {setCompany(e.target.value)}} placeholder = " Enter the company "/>
        <br />

    <button className="appButton" onClick={updateMeeting} type= "button">Update</button>
    </div>
    
    </>
  )
}

export default UpdateMeeting;
