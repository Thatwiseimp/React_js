import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import { useState } from "react";


const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input placeholder='Name' classname='joinInput' type='text' onChange={(event) => setName(event.target.value)} /> </div>
                <div><input placeholder='Room' classname='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} /> </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;