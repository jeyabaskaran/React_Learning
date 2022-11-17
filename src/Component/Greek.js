import React, { useState } from "react";

const Greek = (props) => {

    const { name, others } = props;
    return (
        <div>
            <h1>{name}  {others}</h1>

        </div>
    )
}

export default Greek