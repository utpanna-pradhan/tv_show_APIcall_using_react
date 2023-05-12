import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './Summaryone.css';

function Summaryfive(props) {
 const [sum5,setSum5] =useState("");
 const getSummary5 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setSum5(response.data[4].show.summary); })
    }
  return (
    <div className='container2'>
      <h3 className='head'>To know the summary -:<br></br>
     <button onClick={getSummary5} className='Sumbtn'>click me</button></h3> {sum5}
   
    </div>
  )
}

export default Summaryfive