import React, {useState,forwardRef} from 'react'
import './Notifs.css'
import {Card, CardContent, Typography} from '@material-ui/core'

const Notifs = forwardRef(({msg,user}, ref) => {
    // console.log(msg)
    const isUser= user===msg.username
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser? 'message_usercard' : 'message_guestcard'}>  
         
                <CardContent>
                   
                {msg.map(({message})=>
                    <Typography
                        color='white'
                        variant='h5'
                        component='h2'
                    >
                            {message.text}
                    </Typography>
                )}
                        
                        
                    
                </CardContent>
            </Card>          
        </div>
    )
})

export default Notifs

