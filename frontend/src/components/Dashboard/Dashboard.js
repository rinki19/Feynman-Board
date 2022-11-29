import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


// component
import TopicList from './TopicList';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.topics);

    return (
        <div style={{backgroundColor: '#4747b7', padding:'50px', borderRadius:'30px'}}>
            <h1 style={{marginTop:'0px'}}> DASHBOARD </h1>
            <button onClick={()=>navigate('/addtopic', {state: {userId: location.state.userId}})} style={{ marginBottom: '50px', width: '200px', height: '40px', border: 'none', borderRadius: '30px', backgroundColor: 'grey', color:'white', fontWeight:'bold',cursor:'pointer'}}> ADD TOPIC </button>

            <TopicList topics={location.state.topics} />
        </div>
    )
}
