import React, {useState} from "react";
import './Input.css';

const Input = ({ appendChat }) => {

    const [inputContent, setInputContent] = useState('');

    const handleInputEntered = (event) => {
        setInputContent(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            appendChat(inputContent);
            setInputContent('');
        }
    };

    return <div className='input-container'>
        <input
            className='input-box'
            value={inputContent}
            onChange={handleInputEntered}
            onKeyDown={handleEnterPress}
        />
    </div>;
};

export default Input;