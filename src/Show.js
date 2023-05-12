import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Show.css';



function Show(props) {
    //show1
  const [name,setName] =useState("");
  const [name2,setName2] =useState("");
  const [name3,setName3] =useState("");
  const [name4,setName4] =useState("");
  const [name5,setName5] =useState("");
  //const [sum,setSum] =useState("");
  //show2
  const [name6,setName6] =useState("");
   const [name7,setName7] =useState("");
  const [name8,setName8] =useState("");
  const [name9,setName9] =useState("");
  const [name10,setName10] =useState("");
  //const [sum1,setSum1] =useState("");
  //show3
  const [name11,setName11] =useState("");
  const [name12,setName12] =useState("");
  const [name13,setName13] =useState("");
  const [name14,setName14] =useState("");
  const [name15,setName15] =useState("");
   //const [sum2,setSum2] =useState("");
 //show4
  const [name16,setName16] =useState("");
  const [name17,setName17] =useState("");
  const [name18,setName18] =useState("");
  const [name19,setName19] =useState("");
  const [name20,setName20] =useState("");
  // const [sum3,setSum3] =useState("");
   //show5
  const [name21,setName21] =useState("");
  const [name22,setName22] =useState("");
  const [name23,setName23] =useState("");
  const [name24,setName24] =useState("");
  const [name25,setName25] =useState("");
  //const [sum4,setSum4] =useState("");
  
  const getshowName =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
        console.log(response);
        //show1
        setName( response.data[0].show.name);
        setName2(response.data[0].show.language);
        setName3(response.data[0].show.network.officialSite);
        setName4(response.data[0].show.rating.average);
         setName5(response.data[0].show.network.country.name);
        //setSum(response.data[0].show.summary);
       /* show2
       
        // show3
        
         //show4
       
         //show5*/
       
      
      })
    }
    //show2 
    const getshowName2 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         setName6( response.data[1].show.name);
         setName7(response.data[1].show.language);
         setName8(response.data[1].show.officialSite);
         setName9(response.data[1].show.rating.average);
         setName10(response.data[1].show.network.country.name);
         //setSum1(response.data[1].show.summary); })
    })
}
   
//sow3
    const getshowName3 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
        setName11( response.data[2].show.name);
         setName12(response.data[2].show.language);
         setName13(response.data[2].show.officialSite);
         setName14(response.data[2].show.rating.average);
         setName15(response.data[2].show.status);
         //setSum2(response.data[2].show.summary);
    
    })
    }
    //show4
    const getshowName4 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName16( response.data[3].show.name);
         setName17(response.data[3].show.language);
         setName18(response.data[3].show.network.officialSite);
         setName19(response.data[3].show.status);
         setName20(response.data[3].show.network.country.name);
         //setSum3(response.data[3].show.summary);
    
    })
    }

    //show5
    const getshowName5 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName21( response.data[4].show.name);
         setName22(response.data[4].show.language);
         setName23(response.data[4].show.network.officialSite);
         setName24(response.data[4].show.status);
         setName25(response.data[4].show.network.country.name);
          //setSum4(response.data[4].show.summary);
    
    })
    }
   
  return (
    <div>
         <h1 className='heading'>Tv <span style={{color:'red'}}>Show's</span></h1><br></br>
            
            <div className="show_one">
             <button className='head_button_one' onClick={getshowName} >Show-1</button>
            <h3 className='sub_heading'>Name of the Show of the show ---: {name}</h3> 
                <h2 claasName="details">Few Details about the Show:-</h2>
                <p className='para1'>Language of the show  ---: {name2}</p> 
                <p className='para1'>Officialsite of the Show ---: {name3}</p> 
                <p className='para1'>Country of the show of ---: {name5}</p>
            <p className='para1'>Ratingof the show  ---: {name4}</p>  
            {/* <p>Summary of the show of ---: {sum}</p> */}
        
            <Link to="/summaryone" ><button className='summary1'>summary </button></Link> 
           

           </div>
        
          
         
          
<br></br>
        
           <div  className="show_one">
                <button className='head_button_one' onClick={getshowName2}>Show-2</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name6}</h3> 
         <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name7}</p> 
          <p className='para1'>Officialsite of the Show ---: {name8}</p> 
           <p className='para1'>Average rating of the show  ---: {name9}</p> 
           <p className='para1'>Country of the show of ---: {name10}</p> 
          
            <Link to="/summarytwo" ><button className='summary1'>summary </button></Link> 
            </div>
          

<br></br>
            
            <div  className="show_one">
               <button className='head_button_one' onClick={getshowName3}>Show-3</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name11}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name12}</p> 
          <p className='para1'>Officialsite of the Show ---: {name13}</p> 
          
           <p className='para1'>Status of the show of ---: {name15}</p> 
            <p className='para1'>Ratings of the show  ---: {name14}</p> 
         <Link to="/summarythree" ><button className='summary1' >summary </button></Link>  
            </div>
         
<br></br>
            
           <div  className="show_one">
                <button className='head_button_one' onClick={getshowName4}>Show-4</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name16}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name17}</p> 
          <p className='para1'>Officialsite of the Show ---: {name18}</p> 
           <p className='para1'>Status of the show  ---: {name19}</p> 
           <p className='para1'>Country of the show of ---: {name20}</p> 
           <Link to="/summaryfour" ><button className='summary1' >summary </button></Link> 
            </div>
          

<br></br>
           
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName5}>Show-5</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name21}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name22}</p> 
           <p className='para1'>Officialsite of the Show ---: {name23}</p> 
           <p className='para1'>Status of the show  ---: {name24}</p> 
           <p className='para1'>Country of the show of ---: {name25}</p> 
            <Link to="/summaryfive" ><button className='summary1'>summary </button></Link> 

            </div>



    </div>
  )
}

export default Show