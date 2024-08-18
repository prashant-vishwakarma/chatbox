import React, {useRef, useState} from "react";
import './ChatContainer.css';
import Input from "../input/Input";
import sampleChats from "../../resources/sampleChatList.json";
import app from "../../App";
import Card from "../chat/Card";

const ChatContainer = () => {
    const [chats, setChats] = useState(loadChats());
    const scrollViewRef = useRef(null);

    const appendChat = (message) => {
        const chatObject = {
            "sender": "user",
            "time": new Date().toISOString(),
            "message": message
        };
        setChats([...chats, chatObject]);
        setTimeout(() => {
            scrollViewRef.current?.scrollBy({
                top: scrollViewRef.current.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <div className='chat-container'>
            <div className='title'>ChatBox</div>
            <div ref={scrollViewRef} className='scroll-view-container'>
                {renderChats(chats)}
            </div>
            <Input
                appendChat={appendChat}
            />
        </div>
    );
};

const renderChats = (chats) => {
    return chats.map(chat => {
        return <Card
            key={chat.time}
            chat={chat}
        />
    });
};

const loadChats = () => {
    return sampleChats;
};

export default ChatContainer;