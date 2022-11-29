import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LandingPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const showTopics = async (username) => {
    let options = {
      method: "post",
      url: `http://localhost:3002/getTopics`,
      data: { username }
    }
    let res = await axios(options);
    navigate('/dashboard', {state: res.data});
  }

  return (
    <div style={{backgroundColor:'#4747b7', padding:'0px 20px 0px 20px', borderRadius: '50px'}}>
        <h1> FEYNMAN BOARD </h1>
        <input value={username} onChange={e=>setUsername(e.target.value)} style={{border:"2px solid", width: '500px', height: '40px', borderRadius: '40px', backgroundColor: '#ec7c30', textAlign:'center', font:'20px bold', color: 'white'}} placeholder='USERNAME' ></input>
        <br />


        <button onClick={()=>showTopics(username)} style={{cursor:'pointer', margin:'40px', width: '250px', height:'42px', borderRadius:'25px', backgroundColor:'#e6e685', fontWeight:'bold', border:'none'}}> DASHBOARD </button>
    </div>
  )
}