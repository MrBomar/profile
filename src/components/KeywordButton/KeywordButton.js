import React from 'react';
import './KeywordButton.css';

const KeywordButton = props => {
    return (
        <code className="keywordButton" type="button" onClick={props.keywordClick}>{props.word}</code>
    )
}

export default KeywordButton;