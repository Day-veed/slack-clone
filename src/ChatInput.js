import { Button } from '@mui/material';
import React, { useRef, useState } from 'react'
import styled from "styled-components";
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    console.log(channelId);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(channelId);
        if (!channelId) {
            return false;
        }
        console.log(`well and good ${input}`)
        db.collection ("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Sonny Sangha",
            userImage: 'https://avatars.githubusercontent.com/u/74438128?v=4'
        });

        setInput("");
    }

  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e => setInput(e.target.value))} placeholder={`Message #ROOM`} />
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