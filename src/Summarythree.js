import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';


function Summarythree(props) {
 const [sum3,setSum3] =useState("");
 const getSummary3 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum3(response.data[2].show.summary); })
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary3} className='Sumbtn'>click me</button></h3> {sum3}
   
    </div>
  )
}

export default Summarythree