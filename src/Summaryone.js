import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';


function Summaryone(props) {
 const [sum,setSum] =useState("");
 const getSummary1 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum(response.data[0].show.summary); })
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary1} className='Sumbtn'>click me</button></h3> {sum}
   
    </div>
  )
}

export default Summaryone