import React from 'react';
import './main_header.css'

function Header(props) {
    return (
        <>
            <div className="main_header">
                <p>{props.main_text}</p>
            </div>
        </>
    );
}

export default Header;