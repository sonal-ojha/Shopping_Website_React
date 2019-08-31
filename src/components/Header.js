import React from 'react';

// Function component / dumb component
function Header(props) {
    // JSX
    return(
        <div className="head_container">
            {props.msg}
            {props.children}
        </div>
    )
}

export default Header;