import React, {useState} from 'react'
import './App.css';

function DatePick() {
    const [date,setDate] = useState();
    console.log("Date",date);
    return (
        <div>
            <h3>Selected Date : {date} </h3> 
            <input type="date"  className='main' onChange={e=>setDate(e.target.value)}/>
            <br></br><br></br><br></br>
        </div>
    )
}

export default DatePick


