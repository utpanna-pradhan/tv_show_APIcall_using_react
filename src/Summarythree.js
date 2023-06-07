import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';


function Summarythree(props) {
const [name3,setName3] =useState("");
 const [sum3,setSum3] =useState("");
 const getSummary3 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum3(response.data[2].show.summary); })
    }

   const getname3 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         setName3( response.data[2].show.name); 
          })
    }
   const getmsg =()=>{
      alert("Ticket booked");
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary3} className='Sumbtn'>click me</button></h3> {sum3}
   

   <div className="form_container">
    
      <h3 className='form_head'>Book a Ticket</h3>
      
    <form >
        <h2 onMouseOver={getname3} style={{color:"white",fontSize:"23px",marginLeft:"100px",marginBottom:"23px"}}> Name of the show  -{name3}</h2>
        <label className='form_label'>First name:</label>
        <input type='text' placeholder='enter your first name' className='form_input '/><br></br><br></br>
         <label className='form_label' >Last name:</label>
        <input type='text' placeholder='enter your last name' className='form_input'/><br></br><br></br>
         <label className='form_label'>Date:</label>
        <input type='date' className='form_input' /><br></br><br></br>
         <label className='form_label'>Time:</label>
        <input type="time" className='form_input'></input><br></br><br></br>
         <label className='form_label'>Address:</label>
        <input type="text" className='form_input'></input><br></br><br></br>
        <label className='form_label'>Row number</label>
        <input type='number' className='form_input'/><br></br><br></br>
         <label className='form_label'>Seat number:</label>
        <input type="number" className='form_input'></input><br></br><br></br>
        <button type='submit' onClick={getmsg} className='form_submit' >Book my Ticket</button>
    </form>

    </div> 
    </div>
  )
}

export default Summarythree