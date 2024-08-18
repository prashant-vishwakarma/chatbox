import React from "react";
import './Card.css';

const Card = ({ chat }) => {
    return <div className={`message-slot ${chat.sender === 'user' ? 'user' : 'other'}`}>
        <div className='message-container'>
            {chat.message}
        </div>
    </div>
}

export default Card;