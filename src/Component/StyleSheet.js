import React from "react";
import './myStyle.css'

function StyleSheet(props) {
    const className = props.set ? 'primary' : '';
    return (
        <div>
            <h2 className={`${className} fontSize`}>Style sheet</h2>
        </div>
    )
}

export default StyleSheet;