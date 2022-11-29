import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

//components
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import AddTopic from './components/AddTopic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App App-header'>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addtopic' element={<AddTopic/>} />
     </Routes>
      
    </BrowserRouter>
  </div>
);


