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

   //show6
  const [name26,setName26] =useState("");
  const [name27,setName27] =useState("");
  const [name28,setName28] =useState("");
  const [name29,setName29] =useState("");
  const [name30,setName30] =useState("");
  //const [sum4,setSum4] =useState("");

  //show7
  const [name31,setName31] =useState("");
  const [name32,setName32] =useState("");
  const [name33,setName33] =useState("");
  const [name34,setName34] =useState("");
  const [name35,setName35] =useState("");
  //const [sum4,setSum4] =useState("");

  //show8
  const [name36,setName36] =useState("");
  const [name37,setName37] =useState("");
  const [name38,setName38] =useState("");
  const [name39,setName39] =useState("");
  const [name40,setName40] =useState("");
  //const [sum4,setSum4] =useState("");

  //show9
  const [name41,setName41] =useState("");
  const [name42,setName42] =useState("");
  //const [name43,setName43] =useState("");
  const [name44,setName44] =useState("");
  const [name45,setName45] =useState("");
  //const [sum4,setSum4] =useState("");

  //show8
  const [name46,setName46] =useState("");
  const [name47,setName47] =useState("");
  const [name48,setName48] =useState("");
  const [name49,setName49] =useState("");
  const [name50,setName50] =useState("");
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

    //show6
    const getshowName6 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName26( response.data[5].show.name);
         setName27(response.data[5].show.language);
         setName28(response.data[5].show.network.officialSite);
         setName29(response.data[5].show.status);
         setName30(response.data[5].show.network.country.name);
          //setSum5(response.data[4].show.summary);
    
    })
    }

    //show7
   
    const getshowName7 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName31( response.data[6].show.name);
         setName32(response.data[6].show.language);
         setName33(response.data[6].show.network.officialSite);
         setName34(response.data[6].show.status);
         setName35(response.data[6].show.network.country.name);
          //setSum4(response.data[4].show.summary);
    
    })
    }

    //show8
    const getshowName8 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName36( response.data[7].show.name);
         setName37(response.data[7].show.language);
        setName38(response.data[7].show.network.officialSite);
         setName39(response.data[7].show.status);
         setName40(response.data[7].show.network.country.name);
          //setSum4(response.data[4].show.summary);
    
    })
    }

    //show9
    
    const getshowName9 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName41( response.data[8].show.name);
         setName42(response.data[8].show.url);
         //setName43(response.data[8].show.network.officialSite);
         setName44(response.data[8].show.status);
         setName45(response.data[8].show.webChannel.country.name);
          //setSum4(response.data[4].show.summary);
    
    })
    }

      //show10
    const getshowName10 =() =>{
      Axios.get("https://api.tvmaze.com/search/shows?q=all").then((response)=>{
         
         setName46( response.data[9].show.name);
         setName47(response.data[9].show.language);
         setName48(response.data[9].show.network.officialSite);
         setName49(response.data[9].show.status);
         setName50(response.data[9].show.network.country.name);
          //setSum4(response.data[4].show.summary);
    
    })
    }
   
  return (
    <div className='mainpage'>
         <h1 className='heading'>Tv <span style={{color:'red'}}>Show's</span></h1><br></br>
            {/*show1 */}
            <div className="show_one">
             <button className='head_button_one' onClick={getshowName} >Show-1</button>
            <h3 className='sub_heading'>Name of the Show of the show ---: {name}</h3> 
                <h2 claasName="details">Few Details about the Show:-</h2>
                <p className='para1'>Language of the show  ---: {name2}</p> 
                <p className='para1'>Officialsite of the Show ---: {name3}</p> 
                <p className='para1'>Country of the show of ---: {name5}</p>
            
            <p className='para1'>Ratingof the show  ---: {name4}</p>  
            
            {/* <p>Summary of the show of ---: {sum}</p> */}
       
            <Link to="/summaryone" ><button className='summary1'>Summary </button></Link> 
           

           </div>
        
          
         
          
<br></br>
        {/*show2 */}
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
            {/*show3 */}
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
            {/*show4 */}
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
           {/*show5 */}
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


<br></br>
           {/*show6 */}
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName6}>Show-6</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name26}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name27}</p> 
           <p className='para1'>Officialsite of the Show ---: {name28}</p> 
           <p className='para1'>Status of the show  ---: {name29}</p> 
           <p className='para1'>Country of the show of ---: {name30}</p> 
            <Link to="/summarysix"><button className='summary1'>Summary </button></Link> 

            </div>


<br></br>
           {/*show7 */}
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName7}>Show-7</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name31}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name32}</p> 
           <p className='para1'>Officialsite of the Show ---: {name33}</p> 
           <p className='para1'>Status of the show  ---: {name34}</p> 
           <p className='para1'>Country of the show of ---: {name35}</p> 
            <Link to="/summaryseven" ><button className='summary1'>summary </button></Link> 

            </div>


<br></br>
           {/*show8 */}
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName8}>Show-8</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name36}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name37}</p> 
           <p className='para1'>Officialsite of the Show ---: {name38}</p> 
           <p className='para1'>Status of the show  ---: {name39}</p> 
           <p className='para1'>Country of the show of ---: {name40}</p> 
            <Link to="/summaryeight" ><button className='summary1'>summary </button></Link> 

            </div>

        

<br></br>
           {/*show9 */}
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName9}>Show-9</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name41}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name42}</p> 
          {/* <p className='para1'>Officialsite of the Show ---: {name43}</p> */}
           <p className='para1'>Status of the show  ---: {name44}</p> 
           <p className='para1'>Country of the show of ---: {name45}</p> 
            <Link to="/summarynine" ><button className='summary1'>summary </button></Link> 

            </div>


<br></br>
           {/*show10 */}
            <div  className="show_one">
              <button className='head_button_one' onClick={getshowName10}>Show-10</button>
           <h3 className='sub_heading'>Name of the Show of the show ---: {name46}</h3> 
           <h2 claasName="details">Few Details about the Show</h2>
           <p className='para1'>Language of the show  ---: {name47}</p> 
           <p className='para1'>Officialsite of the Show ---: {name48}</p> 
           <p className='para1'>Status of the show  ---: {name49}</p> 
           <p className='para1'>Country of the show of ---: {name50}</p> 
            <Link to="/summaryten" ><button className='summary1'>summary </button></Link> 

            </div>





    </div>
  )
}

export default Show