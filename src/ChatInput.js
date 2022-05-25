import { Button } from '@mui/material';
import React, { useRef, useState } from 'react'
import styled from "styled-components";
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        
        if (!channelId) {
            return false;
        }
        db.collection ("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Sonny Sangha",
            userImage: 'https://www.bing.com/th?id=OIP.trcmkWTBTosWX1Mpm4DgeAHaE6&w=140&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setInput("");
    }

  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e => setInput(e.target.value))} placeholder={`Message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`