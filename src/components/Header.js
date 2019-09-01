import React from 'react';
import PropTypes from 'prop-types';

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

// Default Props is written only when there is No isRequired for Props
// Header.defaultProps = {
//     msg: "", // Default value in case if props is not passed from Parent component
// }

// Props type checking
Header.propTypes = {
    msg: PropTypes.string.isRequired,
    // msg: PropTypes.string,
}

export default Header;