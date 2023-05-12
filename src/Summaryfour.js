import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';

function Summaryfour(props) {
 const [sum4,setSum4] =useState("");
 const getSummary4 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum4(response.data[3].show.summary); })
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary4} className='Sumbtn'>click me</button></h3> {sum4}
   
    </div>
  )
}

export default Summaryfour