import './App.css';
import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Notifs from './Notifs';
import db from './firebase';
import React from 'react'
import firebase from '@firebase/app'
import FlipMove from 'react-flip-move';



function App() {
  const[input,setInput]= useState('');
  const[messages,setMessages]=useState([]);
  const[username,setUsername]=useState('')

  function fetchData(){
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>{
    snapshot.docs.map(doc => setMessages([{id: doc.id, message:doc.data()}]))
    })
  }



  useEffect(() => {
    setUsername(prompt('Enter your name'))
    fetchData()

  }, [])

  


  const sendMessage=(event)=>{
    event.preventDefault();
    window.scrollTo(0, 999999999999);
    db.collection('messages').add({
      text:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }

  console.log(messages)

  return (
    <div className="App">
      <h1>Messenger clone </h1>
      {/* {messages.map(({message,id}) => (
          <Notifs user={username} msg={message} key={id} ></Notifs>

      ))}   */}
      <Notifs msg={messages} user={username}></Notifs>

      <form>
        <FormControl  className='chatwindow'>
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbunny.com%2Ficons%2Fmobile-apps-messaging-flat-round-icon&psig=AOvVaw1JS4b6Su8I9s6vwXTZBMO8&ust=1618452608771000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCa6vjT_O8CFQAAAAAdAAAAABAO'></img>
          <InputLabel>Enter a message..</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}></Input>
          <Button disabled={!input} variant='contained' color='secondary' type='submit' onClick={sendMessage}>Send</Button>

        </FormControl>
      </form>
      <FlipMove>

        {/* <Notifs 
          message={messages}
          user={username} 
        /> */}
      </FlipMove>
  
      
      
    </div>
  );
}

export default App;
