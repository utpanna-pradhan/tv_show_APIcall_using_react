

import React from 'react';
import Show from './Show';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Summaryone from './Summaryone';
import Summarytwo from './Summarytwo';
import Summarythree from './Summarythree';
import Summaryfour from './Summaryfour';
import Summaryfive from './Summaryfive';
import Summarysix from './Summarysix';
import Summaryseven from './Summaryseven';
import Summaryeight from './Summaryeight';
import Summarynine from './Summarynine';
import Summaryten from './Summaryten';

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
          <Route path='/summarysix' element={<Summarysix />}/>
          <Route path='/summaryseven' element={<Summaryseven />}/>
          <Route path='/summaryeight' element={<Summaryeight />}/>
          <Route path='/summarynine' element={<Summarynine />}/>
          <Route path='/summaryten' element={<Summaryten />}/>
        </Routes>
        
        

    </BrowserRouter>
    </div>
  )
}

export default App