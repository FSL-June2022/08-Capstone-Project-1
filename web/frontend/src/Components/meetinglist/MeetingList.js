import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MeetingList.css'

const MeetingList = () => {
    const [meeting, setmeetings] = useState([]);

    useEffect(() => {
        getMeetings();
    }, []);

    const getMeetings = async () => {
      let result = await fetch('http://localhost:5000/meetings', {
        headers:{
          authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json();
      setmeetings(result);
  }
  // console.log("meetins", meetings)

    const deleteMeeting = async (id) => {
      // console.log(id);
      let result = await fetch(`http://localhost:5000/meeting/${id}`, {
        method: "Delete",
        headers:{
          authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json()
      if(result){
        alert("record is deleted")
        getMeetings();
      }
    }

    const searchHandle = async (event) => {
      // console.log(event.target.value)
      let key = event.target.value;
      if(key){
        let result = await fetch(`http://localhost:5000/search/${key}`, {
          headers:{
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = await result.json();
        if(result){
          setmeetings(result)
        }
      }else{
        getMeetings()
      }
    }

  return (
    <div className='meeting-list'>
      <h1>Meeting list</h1>
      <br />
      <input type="text" placeholder='Meetings Search Here'  className='search-meeting-box' onChange={searchHandle}/>
      <br />
      <ul>
        <li><b>Sr.no</b></li>
        <li><b>Company</b></li>
        <li><b>Model</b></li>
        <li><b>Price</b></li>
        <li><b>Category</b></li>
        <li><b>Delete</b></li>
        <li><b>Update</b></li>
      </ul>
      { meeting.length > 0 ? meeting.map((item, index) => 
        <ul key={item._id}>
        <li>{index + 1}</li>
        <li>{item.company}</li>
        <li>{item.name}</li>
        <li>$ {item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteMeeting(item._id)}>Delete</button></li>
          <li><Link to = {"/update/"+item._id}>Update</Link></li>
      </ul>
    )
    : <h1>No Result Found </h1>
  }
    </div>
  )
}

export default MeetingList
