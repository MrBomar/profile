import React from 'react';

export default function NavButtonMenu(props) {
    return (
        <nav>
            {props.renderButtons().reverse()}
        </nav>
    )
}