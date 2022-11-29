import React from 'react';

export default function TopicList({topics}) {
  return (
    <div style={{ border: "2px solid", padding: '0px 10px', borderRadius: '25px', backgroundColor:'grey'}}>
        <h3>Topic List :</h3>
        {topics.length!==0 && topics}
    </div>
  )
}
