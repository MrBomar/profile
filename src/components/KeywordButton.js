import React from 'react';
import './KeywordButton.css';

const KeywordButton = props => {
    return (
        <button className="keywordButton" type="button" onClick={props.keywordClick}>{props.word}</button>
    )
}

export default KeywordButton;