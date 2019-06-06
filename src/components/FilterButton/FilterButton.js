import React from 'react';
import './FilterButton.css';

export default function FilterButton(props) {
    const clickEvent = (event) => {
        event.stopPropagation();
        props.removeKeyword({target:{innerText:props.keyword}});
    }

    return (
        <div className='filterButton'>
            {props.keyword}
            <span onClick={clickEvent}>
                {String.fromCharCode(9745)}
            </span>
        </div>
    )
}