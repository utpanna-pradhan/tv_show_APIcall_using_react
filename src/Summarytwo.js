import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';


function Summarytwo(props) {
  const [name2,setName2] =useState("");
 const [sum2,setSum2] =useState("");
 const getSummary2 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum2(response.data[1].show.summary); })
    }
      const getname2 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         setName2( response.data[1].show.name); 
          })
    }
     const getmsg =()=>{
      alert("Ticket booked");
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary2} className='Sumbtn'>click me</button></h3> {sum2}
   

      <div className="form_container">
    
      <h3 className='form_head'>Book a Ticket</h3>
      
    <form >
        <h2 onMouseOver={getname2} style={{color:"white",fontSize:"23px",marginLeft:"100px",marginBottom:"23px"}}> Name of the show  -{name2}</h2>
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

export default Summarytwo