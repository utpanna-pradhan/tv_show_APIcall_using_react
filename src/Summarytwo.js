import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';


function Summarytwo(props) {
 const [sum2,setSum2] =useState("");
 const getSummary2 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum2(response.data[1].show.summary); })
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary2} className='Sumbtn'>click me</button></h3> {sum2}
   
    </div>
  )
}

export default Summarytwo