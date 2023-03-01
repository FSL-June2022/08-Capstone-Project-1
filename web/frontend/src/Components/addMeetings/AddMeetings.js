 import React, { useState } from 'react'
 import './AddMeetings.css'


 const AddMeetings = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const addMeeting  = async () => {
      //validation
      // console.log(!name)
      if(!name || !price || !category || !company ){
        setError(true)
        return false;
      }
       console.log("name:",name, "price:", price, "category:", category, "company:", company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userId._id);
        let result = await fetch("http://localhost:5000/add-meeting", {
          method: 'post',
          body:JSON.stringify({name, price, category, company, userId}),
          headers:{
            "Content-Type" : "application/json",
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result = await result.json();
        // console.log(result)
    }

   return (
    <>
     <div className='meeting'>
       <h1>Add Meeting</h1>
       <br />
       <label>Name of the meeting : </label>
       <input className='inputBox' type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder = " Enter Name"/>
       {error && !name && <span className="invalid-input">Enter Valid name</span>  }
       <br />
       <label>Created by : </label>
       <input className='inputBox' type="number" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder = " Enter price"/>
       {error && !price && <span className="invalid-input">Enter Valide price</span>  }
       <br />

       <label>Date and time of the meeting  : </label>
       <input className='inputBox' type="text"  value={category} onChange={(e) => setCategory(e.target.value)} placeholder = " Enter the category "/>
       {error && !category && <span className="invalid-input">Enter Valide category</span>  }
       <br />

       <label>company name : </label>
       <input className='inputBox' type="text"  value={company} onChange={(e) => setCompany(e.target.value)} placeholder = " Enter the company "/>
       {error && !company && <span className="invalid-input">Enter Valide company</span>  }
       <br />

       <button className="appButton" onClick={addMeeting} type= "button" >Add</button>
     </div>
     </>
   )
 }
 
 export default AddMeetings
 