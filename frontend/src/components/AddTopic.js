import React, {useState} from 'react';
import './addTopic.css';

function AddTopic() {
    const [text, setText] = useState('');
    const [categoryButton, setCategoryButton] = useState(true);
    const [arr, setArr] = useState([]);

    const changeButtonState = (e) => {
        e.preventDefault();
        if (categoryButton===true) {
            setCategoryButton(false);

            let str = '', array= [];
            const separator = [',', '-', '/', '\\', ':', ';', '?', '.', '|', '\n'];
            for(let char of text) {
                str += char;
                if(separator.includes(char)) {
                    array.push(str);
                    str = '';
                }
            }
            if(str.length) array.push(str);

            setArr(array);
        }
    }

  return (
    <div style={{backgroundColor: '#4747b7', padding:'20px 50px 50px 50px', borderRadius:'30px'}}>
        <h1>ADD TOPIC</h1>

        <form>
            <label htmlFor='addTopic' style={{fontStyle:'italic', color:'yellow', fontWeight:'bold'}} >TOPIC : </label>
            <input style={{width: '250px', height: '40px', textAlign:'center', font:'20px bold', borderStyle:'none none solid none',borderRadius:'25px'}} id='addTopic' />

            <br />

            <div style={{marginTop:'25px'}}>

                <div style={{display:'flex'}}>
                    <p> {categoryButton===true ? 'Enter the text here :' : 'Entered text :'} </p>
                </div>

                {
                    categoryButton===true ? 
                    <textarea value={text} onChange={e=>setText(e.target.value)} style={{border: "2px solid", padding: '20px 20px 0px 20px', borderRadius: '10px', backgroundColor:'grey', width:'400px', height:'200px', fontSize:'20px', color:'white' }} /> :

                    arr.map((ele, index) => {
                        return (
                            <>
                                <span className='blockClass' key={index}> {ele} </span>
                                <div className='hover-popup'>
                                    <p style={{backgroundColor:'light-blue'}}>Understood</p>
                                    <p style={{backgroundColor:'yellow'}}>Somewhat Understood</p>
                                    <p style={{backgroundColor:'skyBlue'}}>Not clear</p>
                                    <p style={{backgroundColor:'red'}}>What rubbish</p>
                                </div>
                            </>
                        )
                    })
                }

                <br />

                <div  >
                    <button onClick={changeButtonState} style={{marginTop: '20px', width: '200px', height: '40px', borderRadius: '30px', border: 'none', cursor:'pointer', backgroundColor: '#e6e685', fontWeight:'bold'}}>{categoryButton===true ? 'Add' : 'Add topic'}</button>
                </div>

            </div>
        </form>
    </div>
  )
}

export default AddTopic;