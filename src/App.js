/*import { useState } from 'react';
import './App.css';
import Axios from 'axios';



function App() {
 
  //show1
  const [name,setName] =useState("");
  const [name2,setName2] =useState("");
  const [name3,setName3] =useState("");
  const [name4,setName4] =useState("");
  const [name5,setName5] =useState("");
  const [sum,setSum] =useState("");
  //show2
  const [name6,setName6] =useState("");
   const [name7,setName7] =useState("");
  const [name8,setName8] =useState("");
  const [name9,setName9] =useState("");
  const [name10,setName10] =useState("");
  const [sum1,setSum1] =useState("");
  //show3
  const [name11,setName11] =useState("");
  const [name12,setName12] =useState("");
  const [name13,setName13] =useState("");
  const [name14,setName14] =useState("");
  const [name15,setName15] =useState("");
   const [sum2,setSum2] =useState("");
 //show4
  const [name16,setName16] =useState("");
  const [name17,setName17] =useState("");
  const [name18,setName18] =useState("");
  const [name19,setName19] =useState("");
  const [name20,setName20] =useState("");
   const [sum3,setSum3] =useState("");
   //show5
  const [name21,setName21] =useState("");
  const [name22,setName22] =useState("");
  const [name23,setName23] =useState("");
  const [name24,setName24] =useState("");
  const [name25,setName25] =useState("");
  const [sum4,setSum4] =useState("");
  
  const getshowName =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
        console.log(response);
        //show1
        setName( response.data[0].show.name);
        setName2(response.data[0].show.language);
        setName3(response.data[0].show.network.officialSite);
        setName4(response.data[0].show.rating.average);
         setName5(response.data[0].show.network.country.name);
        setSum(response.data[0].show.summary);
       // show2
        setName6( response.data[1].show.name);
         setName7(response.data[1].show.language);
         setName8(response.data[1].show.officialSite);
         setName9(response.data[1].show.rating.average);
         setName10(response.data[1].show.network.country.name);
         setSum1(response.data[1].show.summary);
        // show3
        setName11( response.data[2].show.name);
         setName12(response.data[2].show.language);
         setName13(response.data[2].show.officialSite);
         setName14(response.data[2].show.rating.average);
         setName15(response.data[2].show.status);
         setSum2(response.data[2].show.summary);
         //show4
        setName16( response.data[3].show.name);
         setName17(response.data[3].show.language);
         setName18(response.data[3].show.network.officialSite);
         setName19(response.data[3].show.status);
         setName20(response.data[3].show.network.country.name);
         setSum3(response.data[3].show.summary);
         //show5
        setName21( response.data[4].show.name);
         setName22(response.data[4].show.language);
         setName23(response.data[4].show.network.officialSite);
         setName24(response.data[4].show.status);
         setName25(response.data[4].show.network.country.name);
          setSum4(response.data[4].show.summary);
      
      })
    }
*/
  /*
  return (
    <div className="App">
     
      <h1 className='heading'>Tv Show</h1><br></br>*/
        
        /* <div className="show_one">
          <button onClick={getshowName}>Show-1</button>
           <h1>Name of the Show of the show ---: {name}</h1> 
           <h4>Few Details about the Show</h4>
           <p>Language of the show  ---: {name2}</p> 
           <p>Officialsite of the Show ---: {name3}</p> 
         <p>Country of the show of ---: {name5}</p>
           <p>Status of the show  ---: {name4}</p>  
             <p>Summary of the show of ---: {sum}</p> 

           
          
         </div>
        
          
         
          
<br></br>*}
            /*show2
          {/*  <div className="show2">
                <button onClick={getshowName}>Show-2</button>
           <h1>Name of the Show of the show ---: {name6}</h1> 
         <h4>Few Details about the Show</h4>
           <p>Language of the show  ---: {name7}</p> 
          <p>Officialsite of the Show ---: {name8}</p> 
           <p>Average rating of the show  ---: {name9}</p> 
           <p>Country of the show of ---: {name10}</p> 
          
           <p>Summary of the show of ---: {sum1}</p> 
            </div>
          

<br></br>
            
          {/*}  <div className="show3">
               <button onClick={getshowName}>Show-3</button>
           <h1>Name of the Show of the show ---: {name11}</h1> 
           <h4>Few Details about the Show</h4>
           <p>Language of the show  ---: {name12}</p> 
          <p>Officialsite of the Show ---: {name13}</p> 
          
           <p>Status of the show of ---: {name15}</p> 
            <p>Status of the show  ---: {name14}</p> 
            <p>Summary of the show of ---: {sum2}</p> 
            </div>
         
<br></br>
            
           {/*} <div className="show4">
                <button onClick={getshowName}>Show-4</button>
           <h1>Name of the Show of the show ---: {name16}</h1> 
           <h4>Few Details about the Show</h4>
           <p>Language of the show  ---: {name17}</p> 
          <p>Officialsite of the Show ---: {name18}</p> 
           <p>Average rating of the show  ---: {name19}</p> 
           <p>Country of the show of ---: {name20}</p> 
            <p>Summary of the show of ---: {sum3}</p> 
            </div>
          

<br></br>
           
            {/*<div className="show5">
              <button onClick={getshowName}>Show-5</button>
           <h1>Name of the Show of the show ---: {name21}</h1> 
           <h4>Few Details about the Show</h4>
           <p>Language of the show  ---: {name22}</p> 
           <p>Officialsite of the Show ---: {name23}</p> 
           <p>Average rating of the show  ---: {name24}</p> 
           <p>Country of the show of ---: {name25}</p> 
           <p>Summary of the show of ---: {sum4}</p> 

            </div>
          

        

    </div>
 );
}*/

//export default App;

import React from 'react';
import Show from './Show';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Summaryone from './Summaryone';
import Summarytwo from './Summarytwo';
import Summarythree from './Summarythree';
import Summaryfour from './Summaryfour';
import Summaryfive from './Summaryfive';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show />}/>
          <Route path='/summaryone' element={<Summaryone />}/>
          <Route path='/summarytwo' element={<Summarytwo />}/>
          <Route path='/summarythree' element={<Summarythree />}/>
          <Route path='/summaryfour' element={<Summaryfour />}/>
          <Route path='/summaryfive' element={<Summaryfive />}/>
        </Routes>
        
        

    </BrowserRouter>
    </div>
  )
}

export default App