import React from "react";
import Nav from "./Components/nav/Nav";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import SignUp from "./Components/sign/SignUp";
import PrivateComp from "./Components/Private/PrivateComp";
import Login from "./Components/login/Login";
import AddMeetings from "./Components/addMeetings/AddMeetings";
import MeetingList from "./Components/meetinglist/MeetingList";
import UpdateMeeting from "./Components/updateMeeting/UpdateMeeting";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
    
    <Route element={<PrivateComp/>}>
    <Route path="/" element={<MeetingList/>}/>
    <Route path="/add" element={<AddMeetings/>}/>
    <Route path="/update/:id" element={<UpdateMeeting/>}/>
    <Route path="/logout" element={<h1>Logout Listing Component</h1>}/>
    <Route path="/profile" element={<h1>Profile Listing Component</h1>}/>
    </Route>
    
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
